import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ProductsService } from 'src/app/services/featured-products/products.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-product-details-form',
  templateUrl: './product-details-form.component.html',
  styleUrls: ['./product-details-form.component.css']
})
export class ProductDetailsFormComponent implements OnInit {
  productForm= new FormGroup({
    name:new FormControl("",[Validators.required]),
    price:new FormControl("",[Validators.required]),
    availability:new FormControl("",[Validators.required]),
    details:new FormControl("",[Validators.required]),
    image:new FormControl("",[Validators.required])
  })
  constructor(private productService:ProductsService,private router:Router) { }
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
};
data:any  =null
  ngOnInit(): void {
  }
  addProduct(){
    console.log(this.productForm.value)
    if(this.productForm.valid){
      this.productService.addNewProduct(this.productForm.value).subscribe(res=>{
        console.log(res);
        this.data = res;
        Swal.fire({
          icon:'success',
          title:this.data.messege
        })
        this.router.navigate(["/addFiles"])
      })
     
    }
    else{
      Swal.fire({
        icon:'error',
        title:"Enter Valid Details"
      })
    }
  }
}
