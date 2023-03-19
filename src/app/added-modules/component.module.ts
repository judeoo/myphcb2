import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { HomeComponent } from '../components/home/home.component';
import { FacilitiesComponent } from '../components/facilities/facilities.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FacilityComponent } from '../components/facility/facility.component';
import { AddFacilityComponent } from '../components/add-facility/add-facility.component';
import { EditFacilityComponent } from '../components/edit-facility/edit-facility.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from '../components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../components/verify-email/verify-email.component';
import { NoAccessComponent } from '../components/no-access/no-access.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

const components = [
  HomeComponent,
  FacilitiesComponent,
  NavbarComponent,
  FacilityComponent,
  AddFacilityComponent,
  EditFacilityComponent,
  DashboardComponent,
  SignInComponent,
  SignUpComponent,
  ForgotPasswordComponent,
  VerifyEmailComponent,
  NoAccessComponent,
  NotFoundComponent
];


@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [components]
})
export class ComponentModule { }
