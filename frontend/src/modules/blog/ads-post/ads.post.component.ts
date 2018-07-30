import {Component} from '@angular/core';
import {NewsRecord} from "../../news/schemas/news.record.schema";

@Component({
  selector: 'post-dev',
  templateUrl: './ads.post.component.html',
  styleUrls: ['./ads.post.component.css'],
})
export class AdsPostComponent {
  userInputNewsItem: NewsRecord = {
    title: 'Get your green card now! Trump is getting tougher.',
    source: 'Mueler Law',
    url: 'https://www.bobslaw.com',
    date: new Date().toDateString(),
    img: 'https://marketplace.canva.com/MACWTDRCyBY/1/0/thumbnail_large/canva-blue-gold-gavel-attorney-%26-law-logo-MACWTDRCyBY.jpg'
  };
}
