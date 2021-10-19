import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AddFilesComponent } from './components/admin/add-files/add-files.component';
import { FloatingButtonComponent } from './components/admin/add-files/floating-button/floating-button.component';
import { AdminComponent } from './components/admin/admin.component';
import { EditDeleteBannerComponent } from './components/admin/edit-files/edit-delete-banner/edit-delete-banner.component';
import { EditDeleteFeatureImageComponent } from './components/admin/edit-files/edit-delete-feature-image/edit-delete-feature-image.component';
import { EditDeleteMiddleBannerComponent } from './components/admin/edit-files/edit-delete-middle-banner/edit-delete-middle-banner.component';
import { EditDeleteProductsComponent } from './components/admin/edit-files/edit-delete-products/edit-delete-products.component';
import { ProductDetailsFormComponent } from './components/admin/product-details-form/product-details-form.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { HomeComponent } from './components/home/home.component';
import { ImageModalComponent } from './components/image-modal/image-modal.component';
import { SearchPageComponent } from './components/search-page/search-page.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
