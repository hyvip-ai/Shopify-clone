import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private store:StoreService,private router:Router) { }
  storename:string = "Shopify_Clone"
  data:any = null
  ngOnInit(): void {
  this.store.getStoreName().subscribe(res=>{
    console.log(res)
    this.data = res;
    this.storename = this.data.data.name
  })
  }
  editingOpen(){
    if(localStorage.getItem("storeId")){
      this.router.navigate(["/addFiles"])
    }
    else{
      this.router.navigate(["/admin"])
    }
  }
}
