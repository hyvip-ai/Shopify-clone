import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductsService } from 'src/app/services/featured-products/products.service';
import { FeatureProductCard } from 'src/app/shared/feature-product-cards';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private cartService:CartService,private productService:ProductsService,private aroute:ActivatedRoute) { }
  productData:FeatureProductCard = {
    id:"",
    image:"",
    name:"",
    price:"",
    availability:"",
    details:""
  }
  data:any = null
  ngOnInit(): void {
    this.productService.getProductById(this.aroute.snapshot.params.id).subscribe(res=>{
   
      this.data = res;
      this.data = this.data.data[0]
      this.productData = {
        image:this.data.image,
        name:this.data.name,
        price:this.data.price,
        availability:this.data.availability,
        details:this.data.details,
        id:this.data._id
      }
      console.log(this.productData)
    })
  }
  addToCart(){
    console.log(this.productData)
    this.cartService.addProducts(this.productData)
    // location.reload()
  }
}
