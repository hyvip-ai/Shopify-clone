import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/home/nav/nav.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { FeatureComponent } from './components/home/feature/feature.component';
import { FeatureProductsComponent } from './components/home/feature-products/feature-products.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeatureCardsComponent } from './components/home/feature-cards/feature-cards.component';
import { FeatureProductCardsComponent } from './components/home/feature-products/feature-product-cards/feature-product-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    BannerComponent,
    FeatureComponent,
    FeatureProductsComponent,
    FooterComponent,
    FeatureCardsComponent,
    FeatureProductCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
