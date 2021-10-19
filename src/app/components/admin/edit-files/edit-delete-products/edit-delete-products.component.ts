import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/featured-products/products.service';
import { FeatureProductCard } from 'src/app/shared/feature-product-cards';

@Component({
  selector: 'app-edit-delete-products',
  templateUrl: './edit-delete-products.component.html',
  styleUrls: ['./edit-delete-products.component.css']
})
export class EditDeleteProductsComponent implements OnInit {

  constructor(private service:ProductsService) { }
  productDetails:FeatureProductCard[] = []
  productDetailsTemp:FeatureProductCard[] = this.service.productsData 
  data:any = null
  ngOnInit(): void {
    this.service.getProducts().subscribe(res=>{
      this.data = res;
      if(this.data.data.length>0){
          for(let item of this.data.data){
            var myobj = {
              image:"",
              name:"",
              price:""
            }
            myobj.image = item.image;
            myobj.name = item.name;
            myobj.price = item.price;
            this.productDetails.push(myobj)
          }
          console.log(this.productDetails)
      }
      else{
      this.productDetails = this.productDetailsTemp

      }
    },err=>{
      this.productDetails = this.productDetailsTemp
        })
  }

}
