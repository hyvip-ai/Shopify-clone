import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeaturedImagesService } from 'src/app/services/featured-images/featured-images.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-featured-images',
  templateUrl: './add-featured-images.component.html',
  styleUrls: ['./add-featured-images.component.css']
})
export class AddFeaturedImagesComponent implements OnInit {

  constructor(private imageservice:FeaturedImagesService) { }
  imageForm= new FormGroup({
    image:new FormControl("",[Validators.required])
  })
  ngOnInit(): void {
    this.imageservice.getAllImages().subscribe(res=>{
      this.data = res;
      this.features = this.data.data.length
    })
  }
  features:number = 0;
  data:any = null
  submitImageForm(){
    // console.log(this.imageForm.value);
    if(this.imageForm.valid){
      console.log(this.imageForm.value)
      this.imageservice.adddFeatureImage(this.imageForm.value).subscribe(res=>{
        console.log(res)
        this.data = res;
        Swal.fire({
          icon:'success',
          title:this.data.messege
        })
      })
    }
    else{
      Swal.fire({
        icon:'error',
        title:"Enter a Valid Url"
      })
    }
  }
  @Input() heading:string=""
}
