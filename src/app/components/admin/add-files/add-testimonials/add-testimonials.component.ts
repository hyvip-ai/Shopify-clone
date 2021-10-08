import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { TestimonialsService } from 'src/app/services/testimonials/testimonials.service';
import { Testimonials } from 'src/app/shared/Testimonials';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-testimonials',
  templateUrl: './add-testimonials.component.html',
  styleUrls: ['./add-testimonials.component.css']
})
export class AddTestimonialsComponent implements OnInit {

  constructor(private testiService:TestimonialsService) { }
  @Input() heading:string = ""
  data:any = null;
  testimonials:number =0
  ngOnInit(): void {
    this.testiService.gettestimonails().subscribe(res=>{
      console.log(res);
      this.data =  res;
      this.testimonials = this.data.data.length
    })
  }
  testimonialsForm = new FormGroup({
    name:new FormControl("",[Validators.required]),
    designation:new FormControl("",[Validators.required]),
    data:new FormControl("",[Validators.required]),
    image:new FormControl("",[Validators.required])
  })
  getData(){
      // console.log(this.testimonialsForm.value)
      if(this.testimonialsForm.valid){
        console.log(this.testimonialsForm.value)
        this.testiService.addTestimonials(this.testimonialsForm.value).subscribe(res=>{
          console.log(res)
          this.data = res
          Swal.fire({
            icon:'success',
            title:this.data.messege
          })
        },err=>{
          console.log(err)
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
