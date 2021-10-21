import { Component, Input, OnInit } from '@angular/core';
import { FeaturedcollectionService } from 'src/app/services/featured-colleaction/featuredcollection.service';
import { FeatureCard } from 'src/app/shared/Feature-card';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-delete-collection',
  templateUrl: './edit-delete-collection.component.html',
  styleUrls: ['./edit-delete-collection.component.css']
})
export class EditDeleteCollectionComponent implements OnInit {

  constructor(private collectionService:FeaturedcollectionService) { }

  ngOnInit(): void {
  }
  @Input() cardData:FeatureCard = {
    image:"",
    title:"",
    data:"",
    id:""
  }
  deleteItem(){
    if(this.cardData.id){
      this.collectionService.deleteCollection(this.cardData.id).subscribe(res=>{
        console.log(res);
        location.reload();
      },err=>{
        console.log(err)
      })
    }
    else{
      Swal.fire({
        icon:"error",
        title:"This Collection Can't Be Deleted"
      })
    }
   
  }
}
