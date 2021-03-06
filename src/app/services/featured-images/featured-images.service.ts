import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Images } from 'src/app/shared/feature-images';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeaturedImagesService {

  constructor(private http:HttpClient) { }

  adddFeatureImage(data:Images){
   return this.http.post(`${environment.baseUrl}/api/addAnImage/${localStorage.getItem("storeId")}`,data);
  }
  getAllImages(){
    return this.http.get(`${environment.baseUrl}/api/getAllImages/${localStorage.getItem("storeId")}`);
  }
  deleteImage(id:string){
    return this.http.get(`${environment.baseUrl}/api/deleteAnImage/${localStorage.getItem("storeId")}/${id}`)
  }
  editFeatureImages(id:string,data:Images){
    return this.http.post(`${environment.baseUrl}/api/editImage/${localStorage.getItem("storeId")}/${id}`,data);
  }
  myImages:Images[]= [
    {image:"https://images.unsplash.com/photo-1618887799017-335b5e9e1ea5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"},
    {image:"https://images.unsplash.com/photo-1565839412225-98641b2d7b5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"},
    {image:"https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
  ]
}
