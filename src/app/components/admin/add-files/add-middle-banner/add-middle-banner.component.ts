import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BannerService } from 'src/app/services/banner/banner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-middle-banner',
  templateUrl: './add-middle-banner.component.html',
  styleUrls: ['./add-middle-banner.component.css']
})
export class AddMiddleBannerComponent implements OnInit {

  constructor(private banner:BannerService) { }
  banners:number = 0;
  data:any =     null
  ngOnInit(): void {
    this.banner.getBannersbyPosition("middle").subscribe(res=>{
      this.data=res;
      this.banners = this.data.data.length;
    })
  }
  middlebannerForm = new FormGroup({
    image:new FormControl("",[Validators.required]),
    head:new FormControl("",[Validators.required]),   
    data:new FormControl("",[Validators.required]) 
  })
  submitBannerForm(){
    // console.log("This is Heading" + this.heading)

    if(this.middlebannerForm.valid){
      if(this.heading.split(" ").includes("Top")){
        this.middlebannerForm.addControl("position",new FormControl("top",[Validators.required]))
      }
      else{
        this.middlebannerForm.addControl("position",new FormControl("middle",[Validators.required]))

      }
      console.log(this.middlebannerForm.value);
      if(this.banners==0){
        this.banner.createBanner(this.middlebannerForm.value).subscribe(res=>{
          console.log(res);
          this.data = res;
          Swal.fire({
            icon: 'success',
            title: this.data.messege,
           
          })
        },err=>console.log(err))
      }
      else{
        this.banner.updateBanner(this.middlebannerForm.value).subscribe(res=>{
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
