import { Component, Input, OnInit } from '@angular/core';
import { FeaturedImagesService } from 'src/app/services/featured-images/featured-images.service';

@Component({
  selector: 'app-edit-delete-image-single',
  templateUrl: './edit-delete-image-single.component.html',
  styleUrls: ['./edit-delete-image-single.component.css']
})
export class EditDeleteImageSingleComponent implements OnInit {

  constructor(private imageService:FeaturedImagesService) { }

  ngOnInit(): void {
  }
  @Input() img:string=""
  @Input() id:string= ""
  deleteId(){
    console.log(this.id)
    this.imageService.deleteImage(this.id).subscribe(res=>{
      console.log(res);
      location.reload()
    })
  }
}
