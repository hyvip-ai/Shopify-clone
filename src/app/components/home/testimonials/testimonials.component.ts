import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TestimonialsService } from 'src/app/services/testimonials/testimonials.service';
import { Testimonials } from 'src/app/shared/Testimonials';
declare var $: any;
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit,AfterViewInit {
  TestimonialslData:Testimonials[] = []
  TestimonialsDataTemp:Testimonials[] =this.tetsiservice.myTesttimonials
  data:any = null

  constructor(private tetsiservice:TestimonialsService) { }
  ngAfterViewInit(){

  }
  ngOnInit(): void {

    this.tetsiservice.gettestimonails().subscribe(res=>{
      console.log(res)
      this.data = res;
   if(this.data.data.length>0){
    for(let item of this.data.data){
      var myobj = {
        name:"",
        data:"",
        designation:"",
        image:""
      }
      myobj.name = item.name;
      myobj.data = item.data;
      myobj.designation = item.designation;
      myobj.image = item.image
      this.TestimonialslData.push(myobj);
      
    }
    console.log(this.TestimonialslData)
   }
   else{
    this.TestimonialslData = this.TestimonialsDataTemp
   

   }
    },(err)=>{
      this.TestimonialslData = this.TestimonialsDataTemp
      
    // console.log(this.TestimonaislData)

    })
  }


}
