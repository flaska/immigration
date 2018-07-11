import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewsApiService} from '../../../news/services/news.api.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'block-resource',
  templateUrl: './block.resource.component.html',
  styleUrls: ['./block.resource.component.css']
})
export class BlockResourceComponent {
  url: string;
  password: string;

  constructor(private newsApiService: NewsApiService, public snackBar: MatSnackBar){

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
