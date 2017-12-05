import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SelectComponent} from './select/select.component';
import {PresentComponent} from './present/present.component';

const routes: Routes = [
  {
    path: '', component: SelectComponent, pathMatch: 'full'
  },
  {
    path: 'present', component: PresentComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
