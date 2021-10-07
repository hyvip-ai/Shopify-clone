import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BannerService } from 'src/app/services/banner/banner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-banne',
  templateUrl: './add-banne.component.html',
  styleUrls: ['./add-banne.component.css']
})
export class AddBanneComponent implements OnInit {

  constructor(private banner:BannerService) { }
  banners:number = 0;
  data:any = null;
  ngOnInit(): void {
    this.banner.getBannersbyPosition("top").subscribe(res=>{
      // console.log(res)
      this.data = res
      this.banners = this.data.data.length;
    })
  }
  bannerForm = new FormGroup({
    image:new FormControl("",[Validators.required]),
    head:new FormControl("",[Validators.required]),
    data:new FormControl("",[Validators.required]) 
  })
  submitBannerForm(){
    console.log(this.heading)

    if(this.bannerForm.valid){
      if(this.heading.split(" ").includes("Top")){
        this.bannerForm.addControl("position",new FormControl("top",[Validators.required]))
      }
      else{
        this.bannerForm.addControl("position",new FormControl("middle",[Validators.required]))

      }
      console.log(this.bannerForm.value);
      if(this.banners==0){
        this.banner.createBanner(this.bannerForm.value).subscribe(res=>{
          console.log(res);
    
        },err=>console.log(err))
      }
      else{
        this.banner.updateBanner(this.bannerForm.value).subscribe(res=>{
          console.log(res)
          this.data = res;
          Swal.fire({
            icon:'success',
            title:this.data.messege
          })
        },err=>console.log(err))
      }
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Enter Values Correctly!',
       
      })
    }
  }
  @Input() heading:string = ""
}
