import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component'
import { ResultsComponent } from '../components/results/results.component'
import { DetailsComponent } from '../components/details/details.component'
import { RouterModule, Routes } from '@angular/router'

const routes : Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'results', component: ResultsComponent},
  { path: 'details', component: DetailsComponent},
  { path: '', redirectTo: "login", pathMatch: "full"}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
