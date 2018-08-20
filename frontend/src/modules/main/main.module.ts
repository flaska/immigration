import {NgModule} from '@angular/core';
import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MainComponent} from './components/main/main.component';
import {NewsModule} from '../news/news.module';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../../environments/environment';
import {RouterModule, Routes} from '@angular/router';
import {MainNewsComponent} from '../news/components/mainNews/mainNews.component';
import {NotFoundComponent} from './components/notFound/notFound.component';
import {MatButtonModule} from '@angular/material';

export let appRoutes: Routes = [
  { path: '', component: MainNewsComponent},
  { path: 'news/:channel/:scoring', component: MainNewsComponent},
  { path: 'admin', loadChildren: '../admin/admin.module#AdminModule'},
  { path: 'page', loadChildren: '../page/page.module#PageModule'},
  { path: '**',  component: NotFoundComponent },
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
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    MatButtonModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }



