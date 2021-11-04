import { Component, Input, OnInit } from '@angular/core';
import { Testimonials } from 'src/app/shared/Testimonials';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.testimonialsData)
  }
  @Input() testimonialsData:Testimonials = {
    name:"",
    data:"",
    designation:"",
    image:""
  }

}
