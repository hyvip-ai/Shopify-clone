import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Banner } from 'src/app/shared/BannerCardDaa';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http:HttpClient) { }
  createBanner(data:Banner){
      return this.http.post(`${environment.baseUrl}/api/addBanner/${localStorage.getItem("storeId")}`,data,{
        headers:{
          "Access-Control-Allow-Origin":"*",
          "content-type":"application/json"
        }
      })
  }

  getBannersbyPosition(position:string){
    return this.http.get(`${environment.baseUrl}/api/getBanner/${localStorage.getItem("storeId")}/${position}`)
  }

  updateBanner(data:Banner){
    return this.http.post(`${environment.baseUrl}/api/updateBanner/${localStorage.getItem("storeId")}`,data);
  }
  updateWholeBanner(data:Banner,position:string){
    return this.http.post(`${environment.baseUrl}/api/editBanner/${localStorage.getItem("storeId")}/${position}`,data);
  }
  deleteBanner(bannerId:any){
    return this.http.get(`${environment.baseUrl}/api/deleteBanner/${localStorage.getItem("storeId")}/${bannerId}`);
  }
  middleBanner:Banner={
    image:"https://images.unsplash.com/photo-1621951767587-b24334f11c65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    head: "Image with text overlay" ,
    data:"Use overlay text to give your customers insight into your brand. Select imagery and text that relates to your style and story."
  }
  topBanner:Banner={
    image:"https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    head: "Image with text overlay" ,
    data:"Use overlay text to give your customers insight into your brand. Select imagery and text that relates to your style and story."
  }
}
