import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { UsersComponent } from './users/users.component';
import { ChartsComponent } from './charts/charts.component';


@NgModule({
  declarations: [
    HomeComponent,
    UsersComponent,
    ChartsComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
  ]
})
export class MasterModule { }
