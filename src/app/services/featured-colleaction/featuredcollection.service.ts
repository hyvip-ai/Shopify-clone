import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeatureCard } from 'src/app/shared/Feature-card';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeaturedcollectionService {

  constructor(private http:HttpClient) { }
  featuredColleactionData:FeatureCard[]=[
    {
      image:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHQlMjBzaGlydHxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      title:"Add a title or tagline",
      data:"Share blog posts, products, or promotions with your customers. Use this text to describe products, share details on availability and style, or as a space to display recent reviews or FAQs."
    },
    {
      image:"https://images.unsplash.com/photo-1618354691438-25bc04584c23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
      title:"Add a title or tagline",
      data:"Share blog posts, products, or promotions with your customers. Use this text to describe products, share details on availability and style, or as a space to display recent reviews or FAQs."
    },
    {
      image:"https://images.unsplash.com/photo-1618354691229-88d47f285158?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=415&q=80",
      title:"Add a title or tagline",
      data:"Share blog posts, products, or promotions with your customers. Use this text to describe products, share details on availability and style, or as a space to display recent reviews or FAQs."
    },
  ]
  getCollection(){
    return this.http.get(`${environment.baseUrl}/api/getAllCollection/${localStorage.getItem("storeId")}`);
  }
  postCollection(data:FeatureCard){
    return this.http.post(`${environment.baseUrl}/api/postCollectionItem/${localStorage.getItem("storeId")}`,data);
  }
  deleteCollection(id:string){
    return this.http.get(`${environment.baseUrl}/api/deleteCollection/${localStorage.getItem("storeId")}/${id}`);
  }
}
