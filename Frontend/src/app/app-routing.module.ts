import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewComponent } from './components/new/new.component';
import { ListComponent } from './components/list/list.component';
import { SliderComponent } from './components/slider/slider.component';

const routes: Routes = [
  {path: 'new', component: NewComponent},
  {path: 'list', component: ListComponent},
  {path: 'images', component: SliderComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'new'}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }