import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { RegisterSellerComponent } from './register-seller/register-seller.component';
import { LoginSellerComponent } from './login-seller/login-seller.component';



@NgModule({
  declarations: [
    AuthenticationComponent,
    SuperAdminComponent,
    RegisterSellerComponent,
    LoginSellerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule

  ],
  providers: [],
  bootstrap: [AuthenticationComponent]
})
export class AuthenticationModule { }
