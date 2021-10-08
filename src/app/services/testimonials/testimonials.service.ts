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
}
