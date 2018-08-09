import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({selector: 'main-news', templateUrl: './mainNews.component.html', styleUrls: ['./mainNews.component.scss']})
export class MainNewsComponent implements OnInit{

  channel: string;
  scoring: string;
  private allowedChannels = ['all topics', 'green card', 'uscis', 'h1b'];
  private allowedScoring = ['new', 'top'];
  private title = 'Immigration in Media | --scoring-- US immigration news about --channel--';

  constructor(private route: ActivatedRoute, private router: Router, private titleService: Title){}

  ngOnInit(){
    if (this.router.url==='/'){
      this.channel = 'all topics';
      this.scoring = 'new';
      return;
    }
    var urlChannel = this.route.snapshot.params['channel'].replace('-', ' ');
    var scoring = this.route.snapshot.params['scoring'];
    if (this.allowedChannels.indexOf(urlChannel)>-1) this.channel = urlChannel;
    else this.channel = 'all topics';

    if (this.allowedScoring.indexOf(scoring)>-1) this.scoring = scoring;
    else this.channel = 'new';
  }

  changed(result : {channel: string; scoring: string}){
    if (!result.channel) return;
    this.channel = result.channel;
    this.scoring = result.scoring;
    this.setPageTitle(result.channel, result.scoring);
    if (result.channel=='all topics') this.router.navigateByUrl('/');
    else this.router.navigateByUrl('/news/' + result.channel.replace(' ', '-') + '/' + result.scoring);
  }

  setPageTitle(channel: string, scoring: string){
    var channelString, scoringString;
    if (channel === 'all topics') channelString = 'Green Card, USCIS, H1B';
    if (channel === 'green card') channelString = 'Green Card';
    if (channel === 'h1b') channelString = 'H1B';
    if (channel === 'uscis') channelString = 'USCIS';

    if (scoring==='new') scoringString = 'Latest';
    if (scoring==='top') scoringString = 'Top';

    this.titleService.setTitle( this.title.replace('--scoring--',scoringString).replace('--channel--', channelString));
  }
}
