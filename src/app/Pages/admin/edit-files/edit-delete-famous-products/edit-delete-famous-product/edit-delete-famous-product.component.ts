import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeatureService } from 'src/app/services/feature/feature.service';
import { Feature } from 'src/app/shared/Feature';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-delete-famous-product',
  templateUrl: './edit-delete-famous-product.component.html',
  styleUrls: ['./edit-delete-famous-product.component.css'],
})
export class EditDeleteFamousProductComponent implements OnInit {
  constructor(private FeatureService: FeatureService) {}

  ngOnInit(): void {}
  collectionForm: FormGroup = new FormGroup({
    image: new FormControl('', Validators.required),
    head: new FormControl('', Validators.required),
    data: new FormControl('', Validators.required),
  });
  @Input() FeatureData: Feature = {
    image: '',
    head: '',
    data: '',
    id: '',
  };
  @Input() index: number = 0;
  deleteFeature() {
    if (this.FeatureData.id) {
      console.log(this.FeatureData.id);
      this.FeatureService.deleteFeature(this.FeatureData.id).subscribe(
        (res) => {
          console.log(res);
          location.reload();
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'This Feature Cant Be Deleted',
      });
    }
  }
  submitForm() {
    if (this.collectionForm.valid) {
      console.log(this.FeatureData.id);
      console.log(this.collectionForm.value);
      this.FeatureService.editFeature(this.FeatureData.id!,this.collectionForm.value).subscribe(res=>{
        console.log(res);
          location.reload();

      
      },err=>{
        Swal.fire({
          icon:'error',
          title:`Famous Product Not Updated Error Occured`
        })
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error Occured',
        text: 'ENter Valid Form data',
      });
    }
  }
}
