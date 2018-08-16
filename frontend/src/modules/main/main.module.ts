import {NgModule} from '@angular/core';
import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MainComponent} from './components/main/main.component';
import {NewsModule} from '../news/news.module';
import {MaterialModule} from '../material/material.module';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../../environments/environment';
import {RouterModule, Routes} from '@angular/router';
import {MainNewsComponent} from '../news/components/mainNews/mainNews.component';
import {NotFoundComponent} from './components/notFound/notFound.component';

export let appRoutes: Routes = [
  { path: '', component: MainNewsComponent},
  { path: 'news/:channel/:scoring', component: MainNewsComponent},
  { path: '**',  component: NotFoundComponent },
  // { path: 'admin', loadChildren: '../admin/admin.module#AdminModule'},
  // { path: 'page', loadChildren: '../page/page.module#PageModule'},
];


@NgModule({
  declarations: [
    MainComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'immigration-in-media' }),
    BrowserTransferStateModule,
    NewsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }



