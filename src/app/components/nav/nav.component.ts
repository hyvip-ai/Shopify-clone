import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private store:StoreService) { }
  storename:string = "Shopify_Clone"
  data:any = null
  ngOnInit(): void {
  this.store.getStoreName().subscribe(res=>{
    console.log(res)
    this.data = res;
    this.storename = this.data.data.name
  })
  }

}
