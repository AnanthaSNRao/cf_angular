import { Component, Input, OnInit, AfterContentChecked } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-postchild',
  templateUrl: './postchild.component.html',
  styleUrls: ['./postchild.component.css']
})
export class PostchildComponent implements OnInit {
  @Input() post!: Post
  url: string = ''
  likes: number = 0
  des: string = ''
  d: any
  constructor(private service: PostService) {
  }
  
  ngOnInit(): void {
    this.d = JSON.parse(String(this.post))
    this.url = this.d["image"]
    this.likes = this.d["likes"]
    this.des = this.d["description"]
    // console.log(d, d["image"])
  }
  like(post: Post): void{
    this.likes++
    this.d.likes = this.likes;
    this.service.savePost(this.d).subscribe((res: any)=>{
      console.log(res)
    })
    return
  }
}
