import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { BannerComponent } from './Pages/home/banner/banner.component';
import { FeatureComponent } from './Pages/home/feature/feature.component';
import { FeatureProductsComponent } from './components/feature-products/feature-products.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeatureCardsComponent } from './Pages/home/feature-cards/feature-cards.component';
import { FeatureProductCardsComponent } from './components/feature-products/feature-product-cards/feature-product-cards.component';
import { ImagesSectionComponent } from './Pages/home/images-section/images-section.component';
import { FeatureCardComponent } from './Pages/home/feature-cards/feature-card/feature-card.component';
import { ImageComponent } from './Pages/home/images-section/image/image.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { BannerService } from './services/banner/banner.service';
import { FeaturedcollectionService } from './services/featured-colleaction/featuredcollection.service';
import { FeatureSectionComponent } from './Pages/home/feature/feature-section/feature-section.component';
import { FeatureService } from './services/feature/feature.service';
import { TestimonialsComponent } from './Pages/home/testimonials/testimonials.component';
import { TestimonialComponent } from './Pages/home/testimonials/testimonial/testimonial.component';
import { AddFilesComponent } from './Pages/admin/add-files/add-files.component';
import { AddBanneComponent } from './Pages/admin/add-files/add-banne/add-banne.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { AddMiddleBannerComponent } from './Pages/admin/add-files/add-middle-banner/add-middle-banner.component';
import { FamousComponent } from './Pages/admin/add-files/famous/famous.component';
import { CollectionComponent } from './Pages/admin/add-files/collection/collection.component';
import { AddProductsComponent } from './Pages/admin/add-files/add-products/add-products.component';
import { ProductDetailsFormComponent } from './Pages/admin/product-details-form/product-details-form.component'
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AddTestimonialsComponent } from './Pages/admin/add-files/add-testimonials/add-testimonials.component';
import { AddFeaturedImagesComponent } from './Pages/admin/add-files/add-featured-images/add-featured-images.component';
import { AddStoreComponent } from './Pages/admin/add-store/add-store.component';
import { FloatingButtonComponent } from './Pages/admin/add-files/floating-button/floating-button.component';
import { SearchPageComponent } from './Pages/search-page/search-page.component';
import { EditDeleteBannerComponent } from './Pages/admin/edit-files/edit-delete-banner/edit-delete-banner.component';
import { EditDeleteMiddleBannerComponent } from './Pages/admin/edit-files/edit-delete-middle-banner/edit-delete-middle-banner.component';
import { EditDeleteFeatureImageComponent } from './Pages/admin/edit-files/edit-delete-feature-image/edit-delete-feature-image.component';
import { EditDeleteImageSingleComponent } from './Pages/admin/edit-files/edit-delete-feature-image/edit-delete-image-single/edit-delete-image-single.component';
import { ImageModalComponent } from './components/image-modal/image-modal.component';
import { EditDeleteProductsComponent } from './Pages/admin/edit-files/edit-delete-products/edit-delete-products.component';
import { EditDeleteAProductCardComponent } from './Pages/admin/edit-files/edit-delete-products/edit-delete-a-product-card/edit-delete-a-product-card.component';
import { EditDeleteTestimonialsComponent } from './Pages/admin/edit-files/edit-delete-testimonials/edit-delete-testimonials.component';
import { ProductDetailsComponent } from './Pages/home/product-details/product-details.component';
import { EditSingleTestimonialComponent } from './Pages/admin/edit-files/edit-delete-testimonials/edit-single-testimonial/edit-single-testimonial.component';
import { EditDeleteFamousProductsComponent } from './Pages/admin/edit-files/edit-delete-famous-products/edit-delete-famous-products.component';
import { EditDeleteFamousProductComponent } from './Pages/admin/edit-files/edit-delete-famous-products/edit-delete-famous-product/edit-delete-famous-product.component';
import { EditDeleteCollectionsComponent } from './Pages/admin/edit-files/edit-delete-collections/edit-delete-collections.component';
import { EditDeleteCollectionComponent } from './Pages/admin/edit-files/edit-delete-collections/edit-delete-collection/edit-delete-collection.component';
import { AuthenticationModule } from './Pages/authentication/authentication.module';

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
    EditDeleteMiddleBannerComponent,
    EditDeleteFeatureImageComponent,
    EditDeleteImageSingleComponent,
    ImageModalComponent,
    EditDeleteProductsComponent,
    EditDeleteAProductCardComponent,
    EditDeleteTestimonialsComponent,
    ProductDetailsComponent,
    EditSingleTestimonialComponent,
    EditDeleteFamousProductsComponent,
    EditDeleteFamousProductComponent,
    EditDeleteCollectionsComponent,
    EditDeleteCollectionComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule,
    AuthenticationModule
  ], 
  providers: [BannerService,FeaturedcollectionService,FeatureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
