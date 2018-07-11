import {NgModule} from '@angular/core';
import {MaterialModule} from '../material/material.module';
import {RouterModule, Routes} from '@angular/router';
import {MainAdminComponent} from './components/main/main.admin.component';
import {BlockResourceComponent} from './components/block/block.resource.component';
import {FormsModule} from '@angular/forms';
import {NewsModule} from '../news/news.module';

export let routes: Routes = [
  { path: 'main', component: MainAdminComponent},
];

@NgModule({
  declarations: [
    MainAdminComponent,
    BlockResourceComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    RouterModule.forChild(routes),
    NewsModule
  ],
  providers: []
})
export class AdminModule { }

