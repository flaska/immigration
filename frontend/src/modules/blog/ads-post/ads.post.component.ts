import {Component} from '@angular/core';
import {NewsRecord} from "../../news/schemas/news.record.schema";

@Component({
  selector: 'post-dev',
  templateUrl: './ads.post.component.html',
  styleUrls: ['./ads.post.component.css'],
})
export class AdsPostComponent {
  userInputNewsItem: NewsRecord;
}
