import { Component, Input, OnInit } from '@angular/core';
import { FeatureService } from 'src/app/services/feature/feature.service';
import { Feature } from 'src/app/shared/Feature';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-delete-famous-product',
  templateUrl: './edit-delete-famous-product.component.html',
  styleUrls: ['./edit-delete-famous-product.component.css']
})
export class EditDeleteFamousProductComponent implements OnInit {

  constructor(private FeatureService:FeatureService) { }

  ngOnInit(): void {
  }
  @Input() FeatureData:Feature={
    image:"",
    head:"",
    data:"",
    id:""
  }
  @Input() index:number=0
  deleteFeature(){
    if(this.FeatureData.id){
      console.log(this.FeatureData.id);
      this.FeatureService.deleteFeature(this.FeatureData.id).subscribe(res=>{
        console.log(res);
        location.reload();
      },err=>{
        console.log(err)
      })
    }
    else{
      Swal.fire({
        icon:"error",
        title:"This Feature Cant Be Deleted"
      })
    }
  }
}
