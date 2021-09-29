import { Component, OnInit } from '@angular/core';
import { FeatureCard } from 'src/app/shared/Feature-card';

@Component({
  selector: 'app-feature-cards',
  templateUrl: './feature-cards.component.html',
  styleUrls: ['./feature-cards.component.css']
})
export class FeatureCardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  featureCardsData:FeatureCard[]=[
    {
      image:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHQlMjBzaGlydHxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      title:"Add a title or tagline",
      data:"Share blog posts, products, or promotions with your customers. Use this text to describe products, share details on availability and style, or as a space to display recent reviews or FAQs."
    },
    {
      image:"https://images.unsplash.com/photo-1618354691438-25bc04584c23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
      title:"Add a title or tagline",
      data:"Share blog posts, products, or promotions with your customers. Use this text to describe products, share details on availability and style, or as a space to display recent reviews or FAQs."
    },
    {
      image:"https://images.unsplash.com/photo-1618354691229-88d47f285158?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=415&q=80",
      title:"Add a title or tagline",
      data:"Share blog posts, products, or promotions with your customers. Use this text to describe products, share details on availability and style, or as a space to display recent reviews or FAQs."
    },
  ]
}
