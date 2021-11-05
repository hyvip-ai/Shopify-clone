import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/featured-products/products.service';
import { FeatureProductCard } from 'src/app/shared/feature-product-cards';

@Component({
  selector: 'app-feature-products',
  templateUrl: './feature-products.component.html',
  styleUrls: ['./feature-products.component.css'],
})
export class FeatureProductsComponent implements OnInit {
  constructor(private service: ProductsService) {}
  data: any = null;
  ngOnInit(): void {
    if (localStorage.getItem('storeId')) {
      this.service.getProducts().subscribe(
        (res) => {
          this.data = res;
          console.log(this.data)
        
            for (let item of this.data.data) {
              var myobj = {
                id:'',
                image: '',
                name: '',
                price: '',
                availability:"",
                details:"",

              };
              myobj.image = item.image;
              myobj.name = item.name;
              myobj.price = item.price;
              myobj.availability = item.availability;
              myobj.details = item.details;
              myobj.id = item._id;
              this.productDetails.push(myobj);
            }
            console.log(this.productDetails);

        },
        (err) => {
          this.productDetails = this.productDetailsTemp;
        }
      );
    } else {
      this.productDetails = this.productDetailsTemp;
    }
  }
  productDetails: FeatureProductCard[] = [];
  productDetailsTemp: FeatureProductCard[] = this.service.productsData;

}
