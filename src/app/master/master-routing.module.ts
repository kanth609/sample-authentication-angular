import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../guards/auth.guard';
import { UsersComponent } from './users/users.component';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', redirectTo: 'user', pathMatch: 'full'},
  {
    path: '', 
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'user', component: UsersComponent},
      {path: 'chart', component: ChartsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
