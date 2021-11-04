import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {

  constructor() { }
  superAdmin:FormGroup = new FormGroup({
    username:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required)
  })
  ngOnInit(): void {
  }
  superAdminLogin(){
    if(this.superAdmin.valid){
      console.log(this.superAdmin.value);
    }
    else{
      Swal.fire({
        icon:'error',
        title:"Error Occured",
        text:"Form Data Not Valid"
      })
    }
  }
  get f(){
    return this.superAdmin.controls;
  }
}
