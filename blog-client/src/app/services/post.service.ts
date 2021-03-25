import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postsUrl: string = "http://localhost:4000/blog";
  recentPostsUrl: string = "http://localhost:4000/recent";
  postsByTagUrl: string = "http://localhost:4000/blog/category";

  constructor(private http: HttpClient) { }

  getPost(slug: string) {
    return this.http.get(`${this.postsUrl}/${slug}`);
  }

  getRecentPosts() {
    return this.http.get(`${this.recentPostsUrl}`);
  }

  getPostsByTag(tag: string) {
    return this.http.get(`${this.postsByTagUrl}/${tag}`);
  }

  getAllPosts() {
    return this.http.get(`${this.postsUrl}`);
  }

  slugify(str: string) {
    const regex = new RegExp(/\W+/, "gm");
    const slug = str.replace(regex, " ").toLowerCase().split(" ").join("-");
    return slug;
  }
}
