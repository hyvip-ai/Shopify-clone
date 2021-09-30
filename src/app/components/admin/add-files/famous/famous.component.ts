import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-famous',
  templateUrl: './famous.component.html',
  styleUrls: ['./famous.component.css']
})
export class FamousComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  famousForm = new FormGroup({
    imageUrl:new FormControl("",[Validators.required]),
    title:new FormControl("",[Validators.required]),
    data:new FormControl("",[Validators.required])
  })
  submitFamousForm(){
    console.log(this.famousForm.value);
    this.famousForm.get("imageUrl")?.setValue("");
    this.famousForm.get("title")?.setValue("");
    this.famousForm.get("data")?.setValue("");
  }
  @Input() heading:string=""
}
