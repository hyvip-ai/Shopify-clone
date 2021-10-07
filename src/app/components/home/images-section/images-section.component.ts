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
  imagestemp:Images[] = [
    {image:"https://images.unsplash.com/photo-1618887799017-335b5e9e1ea5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"},
    {image:"https://images.unsplash.com/photo-1565839412225-98641b2d7b5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"},
    {image:"https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
  ]
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
