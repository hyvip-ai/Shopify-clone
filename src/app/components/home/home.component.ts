import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner/banner.service';
import { Banner } from 'src/app/shared/BannerCardDaa';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private banner:BannerService) { }

  ngOnInit(): void {
  }
  heading:Banner=this.banner.topBanner
  body:Banner=this.banner.middleBanner
}
