import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AddFilesComponent } from './components/admin/add-files/add-files.component';
import { FloatingButtonComponent } from './components/admin/add-files/floating-button/floating-button.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProductDetailsFormComponent } from './components/admin/product-details-form/product-details-form.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { HomeComponent } from './components/home/home.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
