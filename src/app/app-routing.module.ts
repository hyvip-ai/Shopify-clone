import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AddFilesComponent } from './Pages/admin/add-files/add-files.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { EditDeleteBannerComponent } from './Pages/admin/edit-files/edit-delete-banner/edit-delete-banner.component';
import { EditDeleteCollectionsComponent } from './Pages/admin/edit-files/edit-delete-collections/edit-delete-collections.component';
import { EditDeleteFamousProductsComponent } from './Pages/admin/edit-files/edit-delete-famous-products/edit-delete-famous-products.component';
import { EditDeleteFeatureImageComponent } from './Pages/admin/edit-files/edit-delete-feature-image/edit-delete-feature-image.component';
import { EditDeleteMiddleBannerComponent } from './Pages/admin/edit-files/edit-delete-middle-banner/edit-delete-middle-banner.component';
import { EditDeleteProductsComponent } from './Pages/admin/edit-files/edit-delete-products/edit-delete-products.component';
import { EditDeleteTestimonialsComponent } from './Pages/admin/edit-files/edit-delete-testimonials/edit-delete-testimonials.component';
import { ProductDetailsFormComponent } from './Pages/admin/product-details-form/product-details-form.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { HomeComponent } from './Pages/home/home.component';
import { ImageModalComponent } from './components/image-modal/image-modal.component';
import { SearchPageComponent } from './Pages/search-page/search-page.component';
import { ProductDetailsComponent } from './Pages/home/product-details/product-details.component';
import { CartComponent } from './Pages/cart/cart.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';

const routes: Routes = [
  {
    path:"",pathMatch:"full",redirectTo:"home"
    },
    {
      path:"home",component:HomeComponent
    },
  {
    path:"collection",component:CollectionsComponent
  },
  {
    path:"admin",component:AdminComponent
  },
  {
    path:"product-details/:id",component:ProductDetailsComponent
  },
  {
    path:"addProductDetails",component:ProductDetailsFormComponent
  },
  {
    path:"addFiles",component:AddFilesComponent,canActivate:[AuthGuard]
  },
  {
    path:"search",component:SearchPageComponent
  },
  {
    path:"editordeleteBanner",component:EditDeleteBannerComponent
  },
  {
    path:"upadateorDeleteMiddleBanner",component:EditDeleteMiddleBannerComponent
  },
  {
    path:"editorDeleteImageSection",component:EditDeleteFeatureImageComponent
  },
  {
    path:"image-modal",component:ImageModalComponent
  },
  {
    path:"editOrDeleteProducts",component:EditDeleteProductsComponent
  },
  {
    path:"editOrDeleteTestimonials",component:EditDeleteTestimonialsComponent
  },
  {
    path:"editOrDeleteCollections",component:EditDeleteFamousProductsComponent
  },
  {
    path:"editOrDeleteProductCollection",component:EditDeleteCollectionsComponent
  },
  {
    path: 'authentication',
    loadChildren: () => import("./Pages/authentication/authentication.module").then(m => m.AuthenticationModule)
  } ,
  {
    path:"cart",component:CartComponent
  },
  {
    path:"**",component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }  
