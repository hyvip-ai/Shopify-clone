import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FeatureProductCard } from 'src/app/shared/feature-product-cards';

@Component({
  selector: 'app-feature-product-cards',
  templateUrl: './feature-product-cards.component.html',
  styleUrls: ['./feature-product-cards.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class FeatureProductCardsComponent implements OnInit {

  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    
  }
  @Input() productData:FeatureProductCard = {
    image:"",
    name:"",
    price:0
  }


}
