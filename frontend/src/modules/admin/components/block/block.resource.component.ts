import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewsApiService} from '../../../news/services/news.api.service';
import {MatSnackBar} from '@angular/material';
import {NewsRecord} from '../../../news/schemas/news.record.schema';

@Component({
  selector: 'block-resource',
  templateUrl: './block.resource.component.html',
  styleUrls: ['./block.resource.component.css']
})
export class BlockResourceComponent implements OnInit{
  url: string;
  password: string;

  blockedUrls: string[];

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
    console.log(1);
    this.newsApiService.blockUrl(this.url, this.password).subscribe(()=>{
      console.log(1);
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
