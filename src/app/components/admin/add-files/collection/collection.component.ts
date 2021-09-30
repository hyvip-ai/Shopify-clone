import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  @Input() heading:string=""
  collectionForm = new FormGroup({
    imageUrl:new FormControl("",[Validators.required]),
    title:new FormControl("",[Validators.required]),
    data:new FormControl("",[Validators.required]),
  })

  constructor() { }

  ngOnInit(): void {
  }

  submitBannerForm(){
    console.log(this.collectionForm.value)
    this.collectionForm.get("imageUrl")?.setValue("");
    this.collectionForm.get("title")?.setValue("");
    this.collectionForm.get("data")?.setValue("");
  }
}
