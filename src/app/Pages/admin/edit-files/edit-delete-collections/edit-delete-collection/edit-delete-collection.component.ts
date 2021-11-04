import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  collectionForm:FormGroup = new FormGroup({
    image:new FormControl("",Validators.required),
    title:new FormControl("",Validators.required),
    data:new FormControl("",Validators.required)
  })
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
  submitCollectionForm(){
    if(this.collectionForm.valid){
      console.log(this.cardData.id)
      console.log(this.collectionForm.value)
      this.collectionService.editCollection(this.cardData.id!,this.collectionForm.value).subscribe(res=>{
        console.log(res);
        location.reload();
      },err=>{
        Swal.fire({
          icon:'error',
          title:"Error Occured",
          text:"Data Not Updated"
        })
      })
    }
    else{
      Swal.fire({
        icon:'error',
        title:"Error Occured",
        text:"Form data Not valid"
      })
    }
  }
}
