import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-middle-banner',
  templateUrl: './add-middle-banner.component.html',
  styleUrls: ['./add-middle-banner.component.css']
})
export class AddMiddleBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  middlebannerForm = new FormGroup({
    imageUrl:new FormControl("",[Validators.required]),
    bannerHeading:new FormControl("",[Validators.required]),
    bannerData:new FormControl("",[Validators.required]) 
  })
  submitBannerForm(){
    console.log(this.heading)

    if(this.middlebannerForm.valid){
      if(this.heading.split(" ").includes("Top")){
        this.middlebannerForm.addControl("position",new FormControl("top",[Validators.required]))
      }
      else{
        this.middlebannerForm.addControl("position",new FormControl("middle",[Validators.required]))

      }
      console.log(this.middlebannerForm.value);
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
