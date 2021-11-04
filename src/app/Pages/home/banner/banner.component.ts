import { Component, Input, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner/banner.service';
import { Banner } from 'src/app/shared/BannerCardDaa';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  data: any = null;
  constructor(private banner: BannerService) {}
  bannerData: Banner = {
    image: '',
    head: '',
    data: '',
  };
  @Input() position: string = '';
  ngOnInit(): void {
    if (localStorage.getItem('storeId')) {
      this.banner.getBannersbyPosition(this.position).subscribe(
        (res) => {
          console.log(res);
          this.data = res;

          this.data = this.data.data[0];
          this.bannerData.image = this.data.image;
          this.bannerData.head = this.data.head;
          this.bannerData.data = this.data.data;
        },
        (err) => {
          if (this.position == 'top') {
            this.bannerData = this.banner.topBanner;
          } else {
            this.bannerData = this.banner.middleBanner;
          }
        }
      );
    } else {
      if (this.position == 'top') {
        this.bannerData = this.banner.topBanner;
      } else {
        this.bannerData = this.banner.middleBanner;
      }
    }
  }
}
