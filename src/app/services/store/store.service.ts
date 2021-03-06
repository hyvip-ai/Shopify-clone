import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http:HttpClient) { }
  createStore(storeData:any){
    return this.http.post(`${environment.baseUrl}/api/createStore`,storeData)
  }
  editStore(storeName:any){
    return this.http.post(`${environment.baseUrl}/api/editStore`,storeName)
  }
  getStoreName(){
    return this.http.get(`${environment.baseUrl}/api/getStore/${localStorage.getItem("storeId")}`);
  }
}
