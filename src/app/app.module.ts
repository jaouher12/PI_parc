import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarketingComponent } from './marketing/marketing.component';
import { ManagerComponent } from './manager/manager.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PredictionComponent } from './prediction/prediction.component';
import { AprioriComponent } from './apriori/apriori.component';
import { AspectComponent } from './aspect/aspect.component';
import { TagCloudComponent } from 'angular-tag-cloud-module';
import {TerrainComponent} from './terrain/terrain.component';
import { CalanderComponent } from './calander/calander.component';
import { Marketing2Component } from './marketing2/marketing2.component';
import { Manager2Component } from './manager2/manager2.component'; 
@NgModule({
  declarations: [
    TerrainComponent,
    AppComponent,
    PredictionComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    MarketingComponent,
    ManagerComponent,
    NotFoundComponent,
    AprioriComponent,
    AspectComponent,
    Marketing2Component,
    CalanderComponent,
    Manager2Component
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TagCloudComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }