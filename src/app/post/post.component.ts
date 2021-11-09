import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts:Array<Post> = []
  constructor(private service: PostService) { 
    this.service.getAllPosts().subscribe((res: Array<Post>)=>{
      res.forEach((r: Post)=> {
        this.posts.push(r)
      });
     });
  }

  ngOnInit(): void {
  }
}
