import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/featured-products/products.service';
import { FeatureProductCard } from 'src/app/shared/feature-product-cards';

@Component({
  selector: 'app-edit-delete-a-product-card',
  templateUrl: './edit-delete-a-product-card.component.html',
  styleUrls: ['./edit-delete-a-product-card.component.css']
})
export class EditDeleteAProductCardComponent implements OnInit {

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
  }
  @Input() productData:FeatureProductCard = {
    image:"",
    name:"",
    price:0,
    id:""
  }
  deleteProduct(){
    console.log(this.productData.id)
    this.productService.deleteProduct(this.productData.id!).subscribe(res=>{
      console.log(res);
      location.reload();
    })
  }
  
}
