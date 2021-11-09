import { utf8Encode } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  
  constructor(private service: PostService) { }
  
  ngOnInit(): void {
  }
  visible = false;
  des = '';
  image = '';
  file: any
  post: Post = new Post
  createPost():void{
    this.visible = true;
  }
  create():void{
    let fileReader = new FileReader();
    let arrB
    fileReader.readAsArrayBuffer(this.file);

    fileReader.onload = (e) => {
      arrB = fileReader.result;
      this.service.postImage(arrB).subscribe(res=>{
        this.image = String(res)
        let id = this.image.substring(this.image.indexOf("/i")+2)
        this.post.id = Number(id)
        this.post.description = this.des
        this.post.image = this.image
        this.service.savePost(this.post).subscribe(r=>{
          console.log(r)
          window.location.reload();
        })
      });
    }

  }
  
fileChanged(e: any) {
    this.file = e.target.files[0];
}

  cancel():void{
    this.visible = false;
  }
}

