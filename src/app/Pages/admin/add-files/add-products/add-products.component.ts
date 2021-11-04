import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/featured-products/products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private router:Router,private productService:ProductsService) { }
  @Input() heading:string = ""
  ngOnInit(): void {
    this.productService.getProducts().subscribe(res=>{
      this.data = res;
      console.log(res)
      this.products = this.data.data.length
      console.log(this.products)
    })
  }
  products:number = 0;
  data:any = null
  gotoFormPage(){
    this.router.navigate(["/addProductDetails"])
  }
}
