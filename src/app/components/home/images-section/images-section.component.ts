import { Component, OnInit } from '@angular/core';
import { FeaturedImagesService } from 'src/app/services/featured-images/featured-images.service';
import { Images } from 'src/app/shared/feature-images';

@Component({
  selector: 'app-images-section',
  templateUrl: './images-section.component.html',
  styleUrls: ['./images-section.component.css']
})
export class ImagesSectionComponent implements OnInit {

  constructor(private imageservice:FeaturedImagesService) { }
  data:any = null;
  images:Images[] = []
  imagestemp:Images[] =this.imageservice.myImages
  ngOnInit(): void  {

    this.imageservice.getAllImages().subscribe(res=>{
      console.log(res);
      this.data = res;
      if(this.data.data.length>0){
     
          for(let item of this.data.data){
            var myobj = {
              image:""
            };
            myobj.image = item.image;
            this.images.push(myobj);
          }
      }
      else{
        this.images = this.imagestemp
      }
    },err=>{
      console.log(err)
        this.images = this.imagestemp
        
    })
  }

 
}
