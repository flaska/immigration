import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FormsModule} from '@angular/forms';
import {NewsModule} from '../news/news.module';
import {CommonModule} from "@angular/common";
import {MainAdminComponent} from './main/main.admin.component';
import {BlockResourceComponent} from './components/block.resource.component';
import {MatButtonModule, MatInputModule, MatListModule} from '@angular/material';

export let routes: Routes = [
  { path: 'main', component: MainAdminComponent},
];

@NgModule({
  declarations: [
    MainAdminComponent,
    BlockResourceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NewsModule,
    MatInputModule,
    MatListModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: []
})
export class AdminModule { }
