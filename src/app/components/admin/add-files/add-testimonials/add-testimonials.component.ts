import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-testimonials',
  templateUrl: './add-testimonials.component.html',
  styleUrls: ['./add-testimonials.component.css']
})
export class AddTestimonialsComponent implements OnInit {

  constructor() { }
  @Input() heading:string = ""

  ngOnInit(): void {
  }
  testimonialsForm = new FormGroup({
    name:new FormControl("",[Validators.required]),
    designation:new FormControl("",[Validators.required]),
    data:new FormControl("",[Validators.required])
  })
  getData(){
      console.log(this.testimonialsForm.value)
  }
}
