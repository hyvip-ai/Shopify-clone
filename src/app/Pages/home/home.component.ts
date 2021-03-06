import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BannerService } from 'src/app/services/banner/banner.service';
import { Banner } from 'src/app/shared/BannerCardDaa';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  editingPageOpen(){
    if(localStorage.getItem("storeId")){
      this.router.navigate(["/addFiles"])
    }
    else{
      this.router.navigate(["/admin"])
    }
  }

}
