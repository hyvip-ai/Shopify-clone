import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature } from 'src/app/shared/Feature';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor(private http:HttpClient) { }
  postNewFeature(data:Feature){
    return this.http.post(`${environment.baseUrl}/api/postnewFeature/${localStorage.getItem("storeId")}`,data)
  }
  getAllFeatures(){
    return this.http.get(`${environment.baseUrl}/api/getFeatures/${localStorage.getItem("storeId")}`);
  }
  FeatureData:Feature[]=[
    {
      image:"https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoaW5nfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      head:"Image With Text",
      data:"Pair large text with an image to give focus to your chosen product, collection, or blog post. Add details on availability, style, or even provide a review."
    },
    {
      image:"https://images.unsplash.com/photo-1554568218-0f1715e72254?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      head:"Image With Text",
      data:"Pair large text with an image to give focus to your chosen product, collection, or blog post. Add details on availability, style, or even provide a review."
    }
  ]
}
