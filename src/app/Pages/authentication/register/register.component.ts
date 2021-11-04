import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup = new FormGroup({
    first_name:new FormControl("",Validators.required),
    last_name:new FormControl("",Validators.required),
    email_address:new FormControl("",Validators.required),
    phone_number:new FormControl("",Validators.required),
    username:new FormControl("",Validators.required),
    country:new FormControl("",Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }
  registerUser(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value)
    }
    else{
      Swal.fire({
        icon:'error',
        title:"Error Occured , From Data not valid"
      })
    }
  }
  get f(){
    return this.registerForm.controls;
  }

}
