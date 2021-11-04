import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeaturedcollectionService } from 'src/app/services/featured-colleaction/featuredcollection.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  @Input() heading:string=""
  collectionForm = new FormGroup({
    image:new FormControl("",[Validators.required]),
    title:new FormControl("",[Validators.required]),
    data:new FormControl("",[Validators.required]),
  })

  constructor(private collectionService:FeaturedcollectionService) { }
  data:any = null
  collections:number = 0
  ngOnInit(): void {
    this.collectionService.getCollection().subscribe(res=>{
      this.data = res;
      this.collections = this.data.data.length;
    })
  }

  submitBannerForm(){
    console.log(this.collectionForm.value)
    if(this.collectionForm.valid){
      this.collectionService.postCollection(this.collectionForm.value).subscribe(res=>{
        console.log(res)
        this.data = res;
        Swal.fire({
          icon:"success",
          title:this.data.messege
        })
      })
    }
    else{
      Swal.fire({
        icon:"error",
        title:"Enter Form Details Correctly"
      })
    }

  }
}
