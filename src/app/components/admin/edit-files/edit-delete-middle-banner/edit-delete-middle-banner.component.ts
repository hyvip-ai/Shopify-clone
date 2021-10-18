import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BannerService } from 'src/app/services/banner/banner.service';
import { Banner } from 'src/app/shared/BannerCardDaa';

@Component({
  selector: 'app-edit-delete-middle-banner',
  templateUrl: './edit-delete-middle-banner.component.html',
  styleUrls: ['./edit-delete-middle-banner.component.css']
})
export class EditDeleteMiddleBannerComponent implements OnInit {

  constructor(private banner:BannerService) { }
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
    })
  }

  bannermiddleEditForm:FormGroup =new FormGroup({
    image:new FormControl("",[Validators.required]),
    head:new FormControl("",[Validators.required]),
    data:new FormControl("",[Validators.required])
  })
  submitMiddleForm(){
    console.log(this.bannermiddleEditForm.value)
    this.banner.updateWholeBanner(this.bannermiddleEditForm.value,this.position).subscribe(res=>{
      this.data = res
      this.bannerData.image = this.data.data.image
      this.bannerData.data = this.data.data.data;
      this.bannerData.head = this.data.data.head
      location.reload()
    })
  }

}
