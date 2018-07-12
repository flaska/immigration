import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({selector: 'main-news', templateUrl: './mainNews.component.html'})
export class MainNewsComponent implements OnInit{

  channel: string;
  private allowedChannels = ['all topics', 'green card', 'uscis', 'h1b'];
  private title = 'Immigration in Media | Latest US immigration news'

  constructor(private route: ActivatedRoute, private router: Router, private titleService: Title){}

  ngOnInit(){
    if (this.router.url==='/') return this.channel = 'all topics';
    var urlChannel = this.route.snapshot.params['channel'].replace('-', ' ');
    if (this.allowedChannels.indexOf(urlChannel)>-1) this.channel = urlChannel;
    else this.channel = 'all topics';
  }

  changed(channel){
    if (!channel) return;
    this.channel = channel;
    this.setPageTitle(channel);
    if (channel=='all topics') this.router.navigateByUrl('/');
    else this.router.navigateByUrl('/news/' + channel.replace(' ', '-'));
  }

  setPageTitle(channel: string){
    var appendix;
    if (channel === 'all topics') appendix = 'Green Card, USCIS, H1B';
    if (channel === 'green card') appendix = 'Green Card';
    if (channel === 'h1b') appendix = 'H1B';
    if (channel === 'uscis') appendix = 'USCIS';
    this.titleService.setTitle( this.title + ' about ' + appendix);
  }
}
