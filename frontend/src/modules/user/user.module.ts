import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from '@angular/common/http';
import {MaterialUserModule} from '../material/material.user.module';
import {CookieService} from 'ngx-cookie-service';
import {UserService} from './services/user.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialUserModule,
    FormsModule
  ],
  providers: [CookieService, UserService],
  exports: [],
})
export class UserModule { }


