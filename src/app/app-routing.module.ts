import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FacilityComponent } from './components/facility/facility.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { AddFacilityComponent } from './components/add-facility/add-facility.component';
import { EditFacilityComponent } from './components/edit-facility/edit-facility.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'add-facility', component: AddFacilityComponent },
  { path: 'facility', component: FacilityComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'edit-facility', component: EditFacilityComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
