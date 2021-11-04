import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeaturedImagesService } from 'src/app/services/featured-images/featured-images.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-delete-image-single',
  templateUrl: './edit-delete-image-single.component.html',
  styleUrls: ['./edit-delete-image-single.component.css']
})
export class EditDeleteImageSingleComponent implements OnInit {

  constructor(private imageService:FeaturedImagesService) { }

  ngOnInit(): void {
  }
  featureImageEditForm=new FormGroup({
    image:new FormControl("",[Validators.required])
  })
  @Input() img:string=""
  @Input() id:string= ""
  deleteId(){
    if(this.id){
      console.log(this.id)
      this.imageService.deleteImage(this.id).subscribe(res=>{
        console.log(res);
        location.reload()
      })
    }
    else{
      Swal.fire({
        icon:"error",
        title:"This Image Doesn't Exist"
      })
    }
  }
  editImage(){
    console.log(this.id)
    this.imageService.editFeatureImages(this.id,this.featureImageEditForm.value).subscribe(res=>{
      console.log(res);
      location.reload();
    })
  }
}
