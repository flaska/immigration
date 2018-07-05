import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent } from './components/main.component';
import {MaterialModule} from '../material/material.module';
import {NewsModule} from '../news/news.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    NewsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
