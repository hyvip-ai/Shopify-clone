import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { FeatureProductCard } from 'src/app/shared/feature-product-cards';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartservice:CartService) { }
  cartproducts:FeatureProductCard[] = []
  ngOnInit(): void {
    this.cartproducts = this.cartservice.getProducts();
  }
  removeItem(index:number){
    
    this.cartservice.removeproductWithId(index)
  }

}
