import { Component, OnInit } from '@angular/core';
import { FeaturedImagesService } from 'src/app/services/featured-images/featured-images.service';
import { Images } from 'src/app/shared/feature-images';

@Component({
  selector: 'app-edit-delete-feature-image',
  templateUrl: './edit-delete-feature-image.component.html',
  styleUrls: ['./edit-delete-feature-image.component.css']
})
export class EditDeleteFeatureImageComponent implements OnInit {

  constructor(private imageservice:FeaturedImagesService) { }
  data:any = null;
  images:Images[] = []
  ngOnInit(): void {
    this.imageservice.getAllImages().subscribe(res=>{
      console.log(res);
      this.data = res;
          for(let item of this.data.data){
            var myobj = {
              image:"",
              id:""
            };
            myobj.image = item.image;
            myobj.id = item._id
            console.log(myobj.id)
            this.images.push(myobj);
          }
    })
  }

}
