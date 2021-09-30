import { Injectable } from '@angular/core';
import { Banner } from 'src/app/shared/BannerCardDaa';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor() { }
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
