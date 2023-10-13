import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeoComponent } from './neo.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';


const routes: Routes = [
  {path: 'neo', component: NeoComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [
    NeoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    RouterModule
  ]
})
export class NeoModule { }
