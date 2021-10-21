import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Testimonials } from 'src/app/shared/Testimonials';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  constructor(private http:HttpClient) { }
  addTestimonials(data:Testimonials){
   return this.http.post(`${environment.baseUrl}/api/addtestimonials/${localStorage.getItem("storeId")}`,data)
  }
  gettestimonails(){
    return this.http.get(`${environment.baseUrl}/api/gettetsimonails/${localStorage.getItem("storeId")}`);
  }
  deleteTestimonials(id:string){
    return this.http.get(`${environment.baseUrl}/api/deleteTestimonial/${localStorage.getItem("storeId")}/${id}`)
  }
  myTesttimonials:Testimonials[]=[
    {
      image:"https://i.ibb.co/RzhdmkC/image.png",
      name:"Kristina",
      designation:"Web Developer",
      data:"Add Customers review and Testimonials to Showcase your store's happy Customers"
    },
    {
      image:"https://i.ibb.co/pP5G5Zx/image.png",
      name:"Dev",
      designation:"Angular Developer",
      data:"Add Customers review and Testimonials to Showcase your store's happy Customers"
    },
    {
      image:"https://i.ibb.co/RzhdmkC/image.png",
      name:"Kristina",
      designation:"Web Developer",
      data:"Add Customers review and Testimonials to Showcase your store's happy Customers"
    },
    {
      image:"https://i.ibb.co/pP5G5Zx/image.png",
      name:"Dev",
      designation:"Angular Developer",
      data:"Add Customers review and Testimonials to Showcase your store's happy Customers"
    }
    
  ]
}
