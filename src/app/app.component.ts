import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shoify-clone';
  constructor(private cartService:CartService){}
  ngOnInit():void{
    if(localStorage.getItem("cart")){
      this.cartService.setProducts()
    }
    
  }
}
