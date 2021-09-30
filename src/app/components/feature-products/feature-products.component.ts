import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/featured-products/products.service';
import { FeatureProductCard } from 'src/app/shared/feature-product-cards';

@Component({
  selector: 'app-feature-products',
  templateUrl: './feature-products.component.html',
  styleUrls: ['./feature-products.component.css']
})
export class FeatureProductsComponent implements OnInit {

  constructor(private service:ProductsService) { }

  ngOnInit(): void {
  }

  productDetails:FeatureProductCard[] = this.service.productsData 
  getProductDetails(name:string){
    console.log(name);
  }
}
