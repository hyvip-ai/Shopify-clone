import { Component, OnInit } from '@angular/core';
import { FeaturedcollectionService } from 'src/app/services/featured-colleaction/featuredcollection.service';
import { FeatureCard } from 'src/app/shared/Feature-card';

@Component({
  selector: 'app-feature-cards',
  templateUrl: './feature-cards.component.html',
  styleUrls: ['./feature-cards.component.css']
})
export class FeatureCardsComponent implements OnInit {

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
        }
        myObj.image = item.image;
        myObj.title = item.title;
        myObj.data = item.data;
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
