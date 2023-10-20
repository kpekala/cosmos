import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeoComponent } from './neo.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NeoListComponent } from './neo-list/neo-list.component';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  {path: 'neo', component: NeoComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [
    NeoComponent,
    NeoListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  exports: [
    RouterModule
  ]
})
export class NeoModule { }
