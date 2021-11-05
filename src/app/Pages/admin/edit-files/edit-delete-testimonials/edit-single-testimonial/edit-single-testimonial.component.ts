import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  testimonialsForm = new FormGroup({
    name:new FormControl("",[Validators.required]),
    designation:new FormControl("",[Validators.required]),
    data:new FormControl("",[Validators.required]),
    image:new FormControl("",[Validators.required])
  })
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
  
  getData(){
    if(this.testimonialsForm.valid){
      console.log(this.testimonialsForm.value)
      this.testiService.editTestimonials(this.testimonialsData.id!,this.testimonialsForm.value).subscribe(res=>{

          location.reload()
     
      })
    }
    else{
      Swal.fire({
        icon:'error',
        title:"Form Value must be Valid"
      })
    }
}

}
