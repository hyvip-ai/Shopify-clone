import { Component, OnInit } from '@angular/core';
import { TestimonialsService } from 'src/app/services/testimonials/testimonials.service';
import { Testimonials } from 'src/app/shared/Testimonials';

@Component({
  selector: 'app-edit-delete-testimonials',
  templateUrl: './edit-delete-testimonials.component.html',
  styleUrls: ['./edit-delete-testimonials.component.css']
})
export class EditDeleteTestimonialsComponent implements OnInit {

  constructor(private tetsiservice:TestimonialsService) { }
  data:any = null
  TestimonialslData:Testimonials[]=[]
  ngOnInit(): void {
    this.tetsiservice.gettestimonails().subscribe(res=>{
      console.log(res)
      this.data = res;
 
    for(let item of this.data.data){
      var myobj = {
        name:"",
        data:"",
        designation:"",
        image:"",
        id:""
      }
      myobj.name = item.name;
      myobj.data = item.data;
      myobj.designation = item.designation;
      myobj.image = item.image
      myobj.id = item._id
      this.TestimonialslData.push(myobj);
      
    }
    console.log(this.TestimonialslData)
   
   
    },(err)=>{
      this.TestimonialslData = this.tetsiservice.myTesttimonials
      
    

    })
  }

}
