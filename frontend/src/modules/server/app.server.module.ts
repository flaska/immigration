import {NgModule} from '@angular/core';
import {ServerModule as AngularServerModule, ServerTransferStateModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';
import {APP_BASE_HREF} from '@angular/common';

import {MainModule} from '../main/main.module';
import {MainComponent} from '../main/components/main.component';



@NgModule({
  imports: [
    MainModule,
    AngularServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: 'http://localhost:3001'}],
  bootstrap: [ MainComponent ],
})
export class AppServerModule {
}
