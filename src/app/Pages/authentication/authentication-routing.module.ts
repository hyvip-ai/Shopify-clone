import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { RegisterSellerComponent } from './register-seller/register-seller.component';
import { RegisterComponent } from './register/register.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';


const routes: Routes = [
    {
        path:"",component:AuthenticationComponent
    },
    {
        path:"register",component:RegisterComponent
    },
    {
        path:"login",component:LoginComponent
    },
    {
        path:"register-seller",component:RegisterSellerComponent
    },
    {
        path:"super-admin",component:SuperAdminComponent
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
