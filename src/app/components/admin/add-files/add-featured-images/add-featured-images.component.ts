import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-featured-images',
  templateUrl: './add-featured-images.component.html',
  styleUrls: ['./add-featured-images.component.css']
})
export class AddFeaturedImagesComponent implements OnInit {

  constructor() { }
  imageForm= new FormGroup({
    img:new FormControl("",[Validators.required])
  })
  ngOnInit(): void {
  }
  submitImageForm(){
    console.log(this.imageForm.value);
  }
  @Input() heading:string=""
}
