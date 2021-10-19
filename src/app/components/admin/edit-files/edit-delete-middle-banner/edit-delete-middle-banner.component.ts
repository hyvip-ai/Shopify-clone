import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BannerService } from 'src/app/services/banner/banner.service';
import { Banner } from 'src/app/shared/BannerCardDaa';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-delete-middle-banner',
  templateUrl: './edit-delete-middle-banner.component.html',
  styleUrls: ['./edit-delete-middle-banner.component.css']
})
export class EditDeleteMiddleBannerComponent implements OnInit {

  constructor(private banner:BannerService,private router:Router) { }
  data:any = null
  bannerData:Banner = {
    image:"",
    head:"",
    data:""
  }
  position:string= "middle"
  ngOnInit(): void {
    this.banner.getBannersbyPosition(this.position).subscribe(res=>{
      console.log(res);
      this.data = res;
      this.data = this.data.data[0];
      this.bannerData.image = this.data.image;
      this.bannerData.head = this.data.head;
      this.bannerData.data = this.data.data
      this.bannerData.id = this.data._id
    },err=>{
      this.bannerData = this.banner.middleBanner
    })
  }

  bannermiddleEditForm:FormGroup =new FormGroup({
    image:new FormControl("",[Validators.required]),
    head:new FormControl("",[Validators.required]),
    data:new FormControl("",[Validators.required])
  })
  submitMiddleForm(){
    console.log(this.bannermiddleEditForm.value)
    if(this.bannerData.id){
      this.banner.updateWholeBanner(this.bannermiddleEditForm.value,this.position).subscribe(res=>{
        this.data = res
       
     
        location.reload()
        console.log(this.data)
      },err=>{
        Swal.fire({
          icon:"error",
          title:"Banner Not Updated Error Occured"
        })
      })
    }
    else{
      this.bannermiddleEditForm.addControl("position",new FormControl("middle",[Validators.required]))
      this.banner.createBanner(this.bannermiddleEditForm.value).subscribe(res=>{
        this.data = res
     
     
        location.reload()
        console.log(this.data)
      })
    }
  }
  deleteTopBanner(){
    if(this.bannerData.id){
      console.log(this.bannerData.id)
      this.banner.deleteBanner(this.bannerData.id).subscribe(res=>{
        console.log(res);
        this.router.navigate(["/addFiles"])
      })
     }
     else{
      Swal.fire({
        icon:"error",
        title:"No Banner Is Stored"
      })
     }
  }

}
