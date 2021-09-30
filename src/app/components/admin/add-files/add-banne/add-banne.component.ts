import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-banne',
  templateUrl: './add-banne.component.html',
  styleUrls: ['./add-banne.component.css']
})
export class AddBanneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  bannerForm = new FormGroup({
    imageUrl:new FormControl("",[Validators.required]),
    bannerHeading:new FormControl("",[Validators.required]),
    bannerData:new FormControl("",[Validators.required]) 
  })
  submitBannerForm(){
    console.log(this.heading)

    if(this.bannerForm.valid){
      if(this.heading.split(" ").includes("Top")){
        this.bannerForm.addControl("position",new FormControl("top",[Validators.required]))
      }
      else{
        this.bannerForm.addControl("position",new FormControl("middle",[Validators.required]))

      }
      console.log(this.bannerForm.value);
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Enter Values Correctly!',
       
      })
    }
  }
  @Input() heading:string = ""
}
