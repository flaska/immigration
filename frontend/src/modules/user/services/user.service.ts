import {Inject, Injectable, Optional} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {CookieService} from 'ngx-cookie-service';

export class BlockedUrl{
  date: Date;
  url: string;
}

@Injectable()
export class UserService {

  serverSideExecution: boolean;

  constructor(private cookieService: CookieService, @Optional() @Inject(APP_BASE_HREF) origin: string) {
    if (origin) {
      this.serverSideExecution = true;
    }
  }

  random(size: number): number{
    return Math.floor(Math.random() * size)+1;
  }

  getUserName(): string{
      if (this.cookieService.get('userName')) return this.cookieService.get('userName');
      else {
        let animals = ['Fox', 'Cat', 'Zebra', 'Giraffe', 'Elephant'];
        return "Anonymous " + animals[this.random(5)-1];
      }
  }

  setUserName(userName: string): void{
    this.cookieService.set('userName', userName);
  }

}
