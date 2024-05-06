import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarketingComponent } from './marketing/marketing.component';
import { ManagerComponent } from './manager/manager.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PredictionComponent } from './prediction/prediction.component';
import { AprioriComponent } from './apriori/apriori.component';
import { AspectComponent } from './aspect/aspect.component';
import { TerrainComponent } from './terrain/terrain.component';
import { CalanderComponent } from './calander/calander.component';
import { Marketing2Component } from './marketing2/marketing2.component';
import { Manager2Component } from './manager2/manager2.component';
const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'terrain', component : TerrainComponent},
  {path: 'login', component : LoginComponent},
  //{path: 'login', component : LoginComponent},
  {path: 'dashboard', component : DashboardComponent},
  {path:'prediction', component:PredictionComponent},
  {path:'apriori', component:AprioriComponent},
  {path:'calander', component:CalanderComponent},
  {path:'aspect',component:AspectComponent},
 // {path: 'dashboard', component : DashboardComponent},
  {path: 'marketing', component : MarketingComponent},
  {path: 'marketing2', component : Marketing2Component},
 //{path: 'Marketing', component : MarketingComponent},
 {path: 'manager', component : ManagerComponent},
 {path: 'manager2', component : Manager2Component},
 //{path: 'manager', component : ManagerComponent},
  {path: 'register', component : RegisterComponent},
 // {path: 'varify-email', component : VarifyEmailComponent},
  {path: 'forgot-password', component : ForgotPasswordComponent},
  {path:'**', component:NotFoundComponent},
  //{path : 'file-upload', component:FileuploadComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }