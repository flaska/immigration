import { NgModule } from '@angular/core';
import {ServerModule as AngularServerModule, ServerTransferStateModule} from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import {MainModule} from '../main/main.module';
import {MainComponent} from '../main/components/main.component';

import {APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';



@NgModule({
  imports: [
    MainModule,
    AngularServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule  //.forRoot
  ],
  providers: [{provide: APP_BASE_HREF, useValue: 'http://localhost:3001'}],
  bootstrap: [ MainComponent ],
})
export class AppServerModule {

}
