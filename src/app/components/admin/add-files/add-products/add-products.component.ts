import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private router:Router) { }
  @Input() heading:string = ""
  ngOnInit(): void {
  }
  gotoFormPage(){
    this.router.navigate(["/addProductDetails"])
  }
}
