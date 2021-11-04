import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.css']
})
export class RegisterSellerComponent implements OnInit {
  registerSellerForm:FormGroup = new FormGroup({
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
  registerSeller(){
    if(this.registerSellerForm.valid){
      console.log(this.registerSellerForm.value)
    }
    else{
      Swal.fire({
        icon:'error',
        title:"Error occured",
        text:"Form is Not valid"
      })
    }
  }
  get f(){
    return this.registerSellerForm.controls;
  }

}
