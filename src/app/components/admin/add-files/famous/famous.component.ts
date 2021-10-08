import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { FeatureService } from 'src/app/services/feature/feature.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-famous',
  templateUrl: './famous.component.html',
  styleUrls: ['./famous.component.css']
})
export class FamousComponent implements OnInit {

  constructor(private featureService:FeatureService) { }
  features:number = 0;
  data:any = null;
  ngOnInit(): void {
      this.featureService.getAllFeatures().subscribe(res=>{
      this.data = res;
      this.features = this.data.data.length;

    })
  }
  famousForm = new FormGroup({
    image:new FormControl("",[Validators.required]),
    head:new FormControl("",[Validators.required]),
    data:new FormControl("",[Validators.required])
  })
  submitFamousForm(){
    
    if(this.famousForm.valid){
      this.featureService.postNewFeature(this.famousForm.value).subscribe(res=>{
      console.log(res);
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
        title: 'Enter Valid Details'
      })
    }
 
  }
  @Input() heading:string=""
}
