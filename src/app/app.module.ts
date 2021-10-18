import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { FeatureComponent } from './components/home/feature/feature.component';
import { FeatureProductsComponent } from './components/feature-products/feature-products.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeatureCardsComponent } from './components/home/feature-cards/feature-cards.component';
import { FeatureProductCardsComponent } from './components/feature-products/feature-product-cards/feature-product-cards.component';
import { ImagesSectionComponent } from './components/home/images-section/images-section.component';
import { FeatureCardComponent } from './components/home/feature-cards/feature-card/feature-card.component';
import { ImageComponent } from './components/home/images-section/image/image.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { AdminComponent } from './components/admin/admin.component';
import { BannerService } from './services/banner/banner.service';
import { FeaturedcollectionService } from './services/featured-colleaction/featuredcollection.service';
import { FeatureSectionComponent } from './components/home/feature/feature-section/feature-section.component';
import { FeatureService } from './services/feature/feature.service';
import { TestimonialsComponent } from './components/home/testimonials/testimonials.component';
import { TestimonialComponent } from './components/home/testimonials/testimonial/testimonial.component';
import { AddFilesComponent } from './components/admin/add-files/add-files.component';
import { AddBanneComponent } from './components/admin/add-files/add-banne/add-banne.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { AddMiddleBannerComponent } from './components/admin/add-files/add-middle-banner/add-middle-banner.component';
import { FamousComponent } from './components/admin/add-files/famous/famous.component';
import { CollectionComponent } from './components/admin/add-files/collection/collection.component';
import { AddProductsComponent } from './components/admin/add-files/add-products/add-products.component';
import { ProductDetailsFormComponent } from './components/admin/product-details-form/product-details-form.component'
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AddTestimonialsComponent } from './components/admin/add-files/add-testimonials/add-testimonials.component';
import { AddFeaturedImagesComponent } from './components/admin/add-files/add-featured-images/add-featured-images.component';
import { AddStoreComponent } from './components/admin/add-store/add-store.component';
import { FloatingButtonComponent } from './components/admin/add-files/floating-button/floating-button.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { EditDeleteBannerComponent } from './components/admin/edit-files/edit-delete-banner/edit-delete-banner.component';
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
    FeatureProductCardsComponent,
    ImagesSectionComponent,
    FeatureCardComponent,
    ImageComponent,
    CollectionsComponent,
    AdminComponent,
    FeatureSectionComponent,
    TestimonialsComponent,
    TestimonialComponent,
    AddFilesComponent,
    AddBanneComponent,
    AddMiddleBannerComponent,
    FamousComponent,
    CollectionComponent,
    AddProductsComponent,
    ProductDetailsFormComponent,
    AddTestimonialsComponent,
    AddFeaturedImagesComponent,
    AddStoreComponent,
    FloatingButtonComponent,
    SearchPageComponent,
    EditDeleteBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule
  ],
  providers: [BannerService,FeaturedcollectionService,FeatureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
