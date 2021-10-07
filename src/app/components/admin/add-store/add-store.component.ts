import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store/store.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {
  data:any=null
  storeForm = new FormGroup({
    name:new FormControl("",[Validators.required])
  })
  editStoreForm = new FormGroup({
    storeName:new FormControl("",[Validators.required])
  })
  constructor(private store:StoreService,private router:Router) { }

  ngOnInit(): void {
  }
  addStore(){
    if(this.storeForm.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You Must Enter A Store Name To Proceed!'
      })
    }
    else{
      console.log(this.storeForm.value)
      this.store.createStore(this.storeForm.value).subscribe(res=>{
        console.log(res);
        this.data =res;
        this.data = this.data.data._id;
        localStorage.setItem("storeId",this.data);
        console.log(localStorage.getItem("storeId"));
        this.router.navigate(["/addFiles"])
      },err=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.error.messege}`
        })
      })
    }
  }
  changeStoreName(){

    var data = this.storeForm.get("name")?.value;
    data = data.split(" ");
    data = data.join("_");
    // console.log(data)
    this.storeForm.get("name")?.setValue(data);

  }
  editStore(){
    if(this.editStoreForm.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You Must Enter A Store Name To Proceed!'
      })
    }
    else{
      console.log(this.editStoreForm.value)
      this.store.editStore(this.editStoreForm.value).subscribe(res=>{
        console.log(res);
        this.data = res;
        Swal.fire({
          icon:'success',
          title:this.data.messege
        })
        localStorage.setItem("storeID",this.data.data._id)
        this.router.navigate(["/addFiles"])
      },err=>{
        Swal.fire({
          icon:'error',
          title:err.error.messege
        })
      })

    }
  }
}
