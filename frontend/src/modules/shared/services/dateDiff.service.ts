import {default as DateDiffExternal} from 'date-diff';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateDiff {
  diff(postDate: string): string{
    var dd;
    try {
     dd = new DateDiffExternal(new Date(), new Date(postDate));
    } catch(e){
      return '';
    }
    if (dd.hours() <= 1) return 'now';
    if (dd.hours() > 1 && dd.hours() <= 6) return Math.floor(dd.hours()) + ' hours ago';
    if (dd.hours() > 6 && dd.hours() <= 12) return 'today';
    if (dd.hours() > 12 && dd.days() <= 1.5) return 'yesterday';
    if (dd.days() > 1.5) return Math.floor(dd.days()) + ' days ago';
    return '';
  }
}


