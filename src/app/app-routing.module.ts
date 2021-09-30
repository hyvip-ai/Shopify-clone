import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { HomeComponent } from './components/home/home.component';
import { TestimonialsComponent } from './components/home/testimonials/testimonials.component';

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
    path:"test",component:TestimonialsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
