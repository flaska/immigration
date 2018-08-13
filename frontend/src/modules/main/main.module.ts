import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent } from './components/main.component';
import {NewsModule} from '../news/news.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material/material.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import {MainNewsComponent} from '../news/components/mainNews/mainNews.component';

export let appRoutes: Routes = [
  { path: '', component: MainNewsComponent},
  { path: 'news/:channel/:scoring', component: MainNewsComponent},
  { path: 'admin', loadChildren: '../admin/admin.module#AdminModule'},
  { path: 'page', loadChildren: '../page/page.module#PageModule'},
];


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'immigration-in-media' }),
    NewsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }



