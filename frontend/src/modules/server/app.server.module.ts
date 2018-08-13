import { NgModule } from '@angular/core';
import { ServerModule as AngularServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import {MainModule} from '../main/main.module';
import {MainComponent} from '../main/components/main.component';


@NgModule({
  imports: [
    MainModule,
    AngularServerModule,
    ModuleMapLoaderModule
  ],
  providers: [
  ],
  bootstrap: [ MainComponent ],
})
export class AppServerModule {}
