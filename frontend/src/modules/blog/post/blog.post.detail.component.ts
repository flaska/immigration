import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {BlogPost, BlogPostService} from '../services/blog.post.service';

@Component({selector: 'blog-post-detail', templateUrl: './blog.post.detail.component.html', styleUrls: ['./blog.post.detail.component.css']})
export class BlogPostDetailComponent implements OnInit{

  post: BlogPost;

  constructor(private route: ActivatedRoute, private blogPostService: BlogPostService, private titleService: Title){}

  ngOnInit(){
    var blogId = this.route.snapshot.params['id'];
    this.blogPostService.getPost(blogId).subscribe((post)=>{
      this.post = post;
      this.titleService.setTitle(this.titleService.getTitle() + " | " + post.title);
    });
  }
}
