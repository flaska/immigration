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

  blockedFeeds: NewsRecord[];

  constructor(private newsApiService: NewsApiService, public snackBar: MatSnackBar){

  }

  ngOnInit(){
    this.newsApiService.getBlockedFeeds().subscribe((data)=>{
      this.blockedFeeds = data;
    });
  }

  blockUrl(){
    console.log(1);
    this.newsApiService.blockUrl(this.url, this.password).subscribe(()=>{
      console.log(1);
      this.snackBar.open("URL Blocked", "Close", {
        duration: 3000,
      });
    }, ()=>{
      this.snackBar.open("Error", "Close", {
        duration: 3000,
      });
    });
  }
}
