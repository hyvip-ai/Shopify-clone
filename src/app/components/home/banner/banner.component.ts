import { Component, Input, OnInit } from '@angular/core';
import { Banner } from 'src/app/shared/BannerCardDaa';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }
  @Input() bannerData:Banner={
    image:"",
    head:"",
    data:""
  }
  ngOnInit(): void {
  }

}
