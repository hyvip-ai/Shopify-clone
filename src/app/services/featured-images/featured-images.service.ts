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
}
