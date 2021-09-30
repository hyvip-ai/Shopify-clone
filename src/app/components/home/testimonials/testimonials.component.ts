import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Testimonials } from 'src/app/shared/Testimonials';
declare var $: any;
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit,AfterViewInit {

  constructor() { }
  ngAfterViewInit(){
    ($("#testimonial-slider")as any).owlCarousel({
      items:2,
      itemsDesktop:[1000,2],
      itemsDesktopSmall:[980,1],
      itemsTablet:[768,1],
      pagination:true,
      navigation:false,
      navigationText:["",""],
      autoPlay:true
  });
  }
  ngOnInit(): void {

  }
  TestimonaislData:Testimonials[] = [
    {
      name:"Kristina",
      designation:"Web Developer",
      data:"Add Customers review and Testimonials to Showcase your store's happy Customers"
    },
    {
      name:"Kristina",
      designation:"Web Developer",
      data:"Add Customers review and Testimonials to Showcase your store's happy Customers"
    },
    {
      name:"Kristina",
      designation:"Web Developer",
      data:"Add Customers review and Testimonials to Showcase your store's happy Customers"
    },
    {
      name:"Kristina",
      designation:"Web Developer",
      data:"Add Customers review and Testimonials to Showcase your store's happy Customers"
    },
    
  ]

}
