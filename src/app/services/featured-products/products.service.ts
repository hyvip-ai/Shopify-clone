import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeatureProductCard } from 'src/app/shared/feature-product-cards';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  addNewProduct(data:FeatureProductCard){
    return this.http.post(`${environment.baseUrl}/api/postProduct/${localStorage.getItem("storeId")}`,data)
  }
  getProducts(){
    return this.http.get(`${environment.baseUrl}/api/getProducts/${localStorage.getItem("storeId")}`)
  }
  productsData:FeatureProductCard[]= [
    {
      image:`https://images.unsplash.com/photo-1577733966973-d680bffd2e80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80`,
      name:"High Quality Bag",
      price:99.99,
    }, {
      image:`https://images.unsplash.com/photo-1595461135849-bf08893fdc2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=868&q=80`,
      name:"Running Shoes",
      price:39.99,
    }, {
      image:`https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      name:"Top Notch Glasses",
      price:29.99,
    }, {
      image:`https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80`,
      name:"Head Hat",
      price:9.99,
    },
    {
      image:`https://images.unsplash.com/photo-1617005082133-548c4dd27f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80`,
      name:"High Quality Lenses",
      price:69.99,
    }, {
      image:`https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
      name:"Running Shoes",
      price:59.99,
    }, {
      image:`https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80`,
      name:"Watches",
      price:39.99,
    }, {
      image:`https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80`,
      name:"Hot Headphones",
      price:29.99,
    },
  ]
}
