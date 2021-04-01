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

  getAllPosts() {
    return this.http.get(`${endpoints.prod.postsMetadata}`, { 
      headers: { 
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept': "application/json"
    }});
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
