import { Component, Input, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner/banner.service';
import { Banner } from 'src/app/shared/BannerCardDaa';

@Component({
  selector: 'app-edit-delete-banner',
  templateUrl: './edit-delete-banner.component.html',
  styleUrls: ['./edit-delete-banner.component.css']
})
export class EditDeleteBannerComponent implements OnInit {

  constructor(private banner:BannerService) { }
  data:any = null
  bannerData:Banner = {
    image:"",
    head:"",
    data:""
  }
  position:string= "top"
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

}
