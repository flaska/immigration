import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {BlockedUrl, NewsApiService} from '../../news/services/news.api.service';


@Component({
  selector: 'block-resource',
  templateUrl: './block.resource.component.html',
  styleUrls: ['./block.resource.component.css']
})
export class BlockResourceComponent implements OnInit{
  url: string;
  password: string;

  blockedUrls: BlockedUrl[];

  constructor(private newsApiService: NewsApiService, public snackBar: MatSnackBar){

  }

  fetchBlockedUrls(){
    this.newsApiService.getBlockedFeeds().subscribe((data)=>{
      this.blockedUrls = data;
    });
  }

  ngOnInit(){
    this.fetchBlockedUrls();
  }

  blockUrl(){
    this.newsApiService.blockUrl(this.url, this.password).subscribe(()=>{
      this.snackBar.open("URL Blocked", "Close", {
        duration: 3000,
      });
      this.fetchBlockedUrls();
    }, ()=>{
      this.snackBar.open("Error", "Close", {
        duration: 3000,
      });
    });
  }
}
