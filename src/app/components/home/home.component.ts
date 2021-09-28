import { Component, OnInit } from '@angular/core';
import { Overlay } from 'src/app/shared/Overlay';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  heading:Overlay={
    heading: "Image with text overlay" ,
    data:"Use overlay text to give your customers insight into your brand. Select imagery and text that relates to your style and story."
  }
  body:Overlay={
    heading: "Image with text overlay" ,
    data:"Use overlay text to give your customers insight into your brand. Select imagery and text that relates to your style and story."
  }
}
