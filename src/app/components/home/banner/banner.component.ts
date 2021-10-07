import { Component, Input, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner/banner.service';
import { Banner } from 'src/app/shared/BannerCardDaa';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private banner:BannerService) { }
 bannerData:Banner={
    image:"",
    head:"",
    data:""
  }
  @Input() position:string= ""
  ngOnInit(): void {
    console.log(this.position)
    if(this.position=="top"){
         this.bannerData=this.banner.topBanner
  }
    else{
     this.bannerData=this.banner.middleBanner

    }
    // this.banner.getBannersbyPosition(this.position).subscribe(res=>{
    //   console.log(res)
    // })
  }

}
