import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureProductCardsComponent } from './components/home/feature-products/feature-product-cards/feature-product-cards.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"test",component:FeatureProductCardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
