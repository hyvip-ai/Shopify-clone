import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent implements OnInit,OnChanges {

  constructor() { }
  @Input() imgUrl:string ="https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=" 
  ngOnInit(): void {
  }
  ngOnChanges():void{
    console.log(this.imgUrl)
  }

}
