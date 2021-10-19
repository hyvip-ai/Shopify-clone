import { Component, Input, OnInit } from '@angular/core';
import { Feature } from 'src/app/shared/Feature';

@Component({
  selector: 'app-feature-section',
  templateUrl: './feature-section.component.html',
  styleUrls: ['./feature-section.component.css']
})
export class FeatureSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.index)
  }
  @Input() FeatureData:Feature={
    image:"",
    head:"",
    data:""
  }
  @Input() index:number=0
  

}
