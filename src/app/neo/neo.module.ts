import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeoComponent } from './neo.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


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
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class NeoModule { }
