import { Component, OnInit } from '@angular/core';
import { FeaturedcollectionService } from 'src/app/services/featured-colleaction/featuredcollection.service';
import { FeatureCard } from 'src/app/shared/Feature-card';

@Component({
  selector: 'app-edit-delete-collections',
  templateUrl: './edit-delete-collections.component.html',
  styleUrls: ['./edit-delete-collections.component.css']
})
export class EditDeleteCollectionsComponent implements OnInit {
  constructor(private featurecard:FeaturedcollectionService) { }
  data:any = null
  ngOnInit(): void {
    this.featurecard.getCollection().subscribe(res=>{
      console.log(res)
      this.data =  res;
      if(this.data.data.length>0){
       for(let item of this.data.data){
        var myObj = {
          image:"",
          title:"",
          data:"",
          id:""
        }
        myObj.image = item.image;
        myObj.title = item.title;
        myObj.data = item.data;
        myObj.id = item._id;
        this.featureCardsData.push(myObj);
       }
      }
      else{
      this.featureCardsData = this.featureCardsDataTemp

      }
    },err=>{
      this.featureCardsData = this.featureCardsDataTemp
    })
  }
  featureCardsData:FeatureCard[]= [];
  featureCardsDataTemp:FeatureCard[] = this.featurecard.featuredColleactionData
}
