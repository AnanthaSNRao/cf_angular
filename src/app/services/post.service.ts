import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(){
    return this.http.get<Array<Post>>('https://my-worker.anantha1996sn.workers.dev/post/getAll')
  }
  getPost(id: number){
    return this.http.get<Post>(`https://my-worker.anantha1996sn.workers.dev/post/get/${id}`)
  }
  getImage(id: number){
    return this.http.get<Object>(`https://my-worker.anantha1996sn.workers.dev/assets/i${id}`)
  }
  savePost(content :Object){
    return this.http.post<Array<Post>>('https://my-worker.anantha1996sn.workers.dev/post',content)
  }
  postImage(content: any){
    return this.http.post(`https://my-worker.anantha1996sn.workers.dev/image`,content)
  }
}
