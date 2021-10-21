import { Component, OnInit } from '@angular/core';
import { FeatureService } from 'src/app/services/feature/feature.service';
import { Feature } from 'src/app/shared/Feature';

@Component({
  selector: 'app-edit-delete-famous-products',
  templateUrl: './edit-delete-famous-products.component.html',
  styleUrls: ['./edit-delete-famous-products.component.css']
})
export class EditDeleteFamousProductsComponent implements OnInit {


  constructor(private service:FeatureService) { }
  data:any = null
  ngOnInit(): void {  
    this.service.getAllFeatures().subscribe(res=>{
      console.log(res);
      this.data=res;
      if(this.data.data.length>0){
        for(let item of this.data.data){
          var myobj = {
            image:"",
            head:"",
            data:"",
            id:""
          }
          myobj.image = item.image;
          myobj.head = item.head;
          myobj.data = item.data;
          myobj.id = item._id;
          this.FeatureData.push(myobj)
        }
      }
      else{
        this.FeatureData = this.FeatureDataTemp

      }
    },err=>{
      this.FeatureData = this.FeatureDataTemp
    })
  }
  FeatureData:Feature[]=[];
  FeatureDataTemp:Feature[] = this.service.FeatureData

}
