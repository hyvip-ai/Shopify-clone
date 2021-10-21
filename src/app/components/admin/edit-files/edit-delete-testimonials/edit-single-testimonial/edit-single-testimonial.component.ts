import { Component, Input, OnInit } from '@angular/core';
import { TestimonialsService } from 'src/app/services/testimonials/testimonials.service';
import { Testimonials } from 'src/app/shared/Testimonials';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-single-testimonial',
  templateUrl: './edit-single-testimonial.component.html',
  styleUrls: ['./edit-single-testimonial.component.css']
})
export class EditSingleTestimonialComponent implements OnInit {

  constructor(private testiService:TestimonialsService) { }

  ngOnInit(): void {
  }
  @Input() testimonialsData:Testimonials = {
    name:"",
    data:"",
    designation:"",
    image:"",
    id:""
  }
  deleteTestimonial(){
    if(this.testimonialsData.id){
      console.log(this.testimonialsData.id)
      this.testiService.deleteTestimonials(this.testimonialsData.id).subscribe(res=>{
        console.log(res);
        location.reload();
      })
    }
    else{
      Swal.fire({
        icon:"error",
        title:"No Testimonials Found"
      })
    }
  }

}
