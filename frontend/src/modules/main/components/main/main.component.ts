import { Component } from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {delay} from 'rxjs/internal/operators';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  navigatingRoute: boolean = false;
  constructor(private router: Router){
    router.events.pipe(delay(0)).subscribe(event => {
      if(event instanceof NavigationStart) {
        this.navigatingRoute = true;
      }else if(event instanceof NavigationEnd) {
        this.navigatingRoute = false;
      }
    });
  }
}
