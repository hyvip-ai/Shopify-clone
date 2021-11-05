import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  cartProducts:number = 0
  constructor(private store:StoreService,private router:Router,private title:Title,private cartService:CartService) { 

  }
  storename:string = "Shopify_Clone"
  data:any = null
  ngOnInit(): void {
    this.cartProducts = this.cartService.getProducts().length
    if(localStorage.getItem("storeId")){
      this.store.getStoreName().subscribe(res=>{
        console.log(res)
        this.data = res;
        this.storename = this.data.data.name
        this.title.setTitle(this.storename)
      },err=>console.log(err))
    }
    else{
      this.title.setTitle("Shopify_Clone")
    }

  }
  editingOpen(){
    if(localStorage.getItem("storeId")){
      this.router.navigate(["/addFiles"])
    }
    else{
      this.router.navigate(["/admin"])
    }
  }
}
