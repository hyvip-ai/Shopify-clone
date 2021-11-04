import { Injectable } from '@angular/core';
import { FeatureProductCard } from 'src/app/shared/feature-product-cards';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  addedProducts:FeatureProductCard[] = []
  constructor() { }
  getProducts(){
    return this.addedProducts;
  }
  addProducts(data:FeatureProductCard){
    this.addedProducts.push(data)
  }
}
