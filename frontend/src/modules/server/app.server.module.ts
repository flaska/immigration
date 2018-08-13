import { NgModule } from '@angular/core';
import { ServerModule as AngularServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import {MainModule} from '../main/main.module';
import {MainComponent} from '../main/components/main.component';

import {APP_BASE_HREF} from '@angular/common';


@NgModule({
  imports: [
    MainModule,
    AngularServerModule,
    ModuleMapLoaderModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: 'http://localhost:3001'}],
  bootstrap: [ MainComponent ],
})
export class AppServerModule {}
