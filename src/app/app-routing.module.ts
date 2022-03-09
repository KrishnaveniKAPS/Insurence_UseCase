import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterComponent } from './register/register.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PolicyDetailsComponent } from './policy-details/policy-details.component';
import { DashBordComponent } from './dash-bord/dash-bord.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



const routes: Routes = [{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'navbar',component:NavBarComponent},
{path:'register',component:RegisterComponent},
{path: 'sidebar', component:SideBarComponent},
{path: 'policydetails', component:PolicyDetailsComponent},
{path: 'dashboard',component:DashBordComponent},
{path: 'aboutus', component:AboutUsComponent},
{path: 'contactus', component:ContactUsComponent},
{path:'home',component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
