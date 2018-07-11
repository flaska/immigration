import {NgModule} from '@angular/core';
import {MaterialModule} from '../material/material.module';
import {RouterModule, Routes} from '@angular/router';
import {MainAdminComponent} from './components/main/main.admin.component';

export let routes: Routes = [
  { path: 'main', component: MainAdminComponent},
];

@NgModule({
  declarations: [
    MainAdminComponent
  ],
  imports: [
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  providers: []
})
export class AdminModule { }

