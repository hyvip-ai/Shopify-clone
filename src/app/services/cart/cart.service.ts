import { Injectable } from '@angular/core';
import { FeatureProductCard } from 'src/app/shared/feature-product-cards';
import Swal from 'sweetalert2';

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
    var flag = 0;
    for(let item of this.addedProducts){
      if(item.id == data.id){
        flag = 1;
        break
      }
      else{
        flag = 0
      }
    }
    if(!flag){
      this.addedProducts.push(data)
      localStorage.setItem("cart",JSON.stringify(this.addedProducts));
    }
    else{
      Swal.fire({
        icon:'error',
        title:"Product Already in Cart"
      })
    }
  }
  removeproductWithId(index:number){
    this.addedProducts.splice(index,1);
  }
  setProducts(){
   this.addedProducts =  JSON.parse(localStorage.getItem("cart")!)
  }
}
