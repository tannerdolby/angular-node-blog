import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpoints } from '../../assets/endpoints';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  constructor(private http: HttpClient) { }

  getPost(slug: string) {
    return this.http.get(`${endpoints.prod.post}?name=${slug}`);
  }

  getRecentPosts() {
    return this.http.get(`${endpoints.prod.recentPosts}`);
  }

  getAllPosts() {
    return this.http.get(`${endpoints.prod.postsMetadata}`);
  }

  getPostsByTag(tag: string) {
    return this.http.get(`${endpoints.prod.postsByTag}?tag=${tag}`);
  }

  slugify(str: string) {
    const regex = new RegExp(/\W+/, "gm");
    const slug = str.replace(regex, " ").toLowerCase().split(" ").join("-");
    return slug;
  }
}
