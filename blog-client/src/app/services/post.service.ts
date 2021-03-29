import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { fetch } from '';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // Node/Express local endpoints
  postsUrl: string = "http://localhost:4000/blog";
  recentPostsUrl: string = "http://localhost:4000/recent";
  postsByTagUrl: string = "http://localhost:4000/blog/category";
  
  // Netlify Lambda function endpoints
  recentLambdaUrl: string = "http://localhost:9000/.netlify/functions/app/recent";
  postLambdaUrl: string = "http://localhost:9000/.netlify/functions/app/blog";
  allPostsLambdaUrl: string = "http://localhost:9000/.netlify/functions/app/blog";
  postsByTagLambdaUrl: string = "http://localhost:9000/.netlify/functions/app/blog/category";
  recentPosts: string = "https://modest-bhabha-3a9de8.netlify.app/.netlify/functions/rawr";

  constructor(private http: HttpClient) { }

  getPost(slug: string) {
    return this.http.get(`${this.postLambdaUrl}/${slug}`);
  }

  getRecentPosts() {
    return this.http.get(`${this.recentPosts}`, { 
      headers: { 
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Content-Type': 'text/plain',
        'Accept': "application/json"
    }});
  }

  getPostsByTag(tag: string) {
    return this.http.get(`${this.postsByTagLambdaUrl}/${tag}`);
  }

  getAllPosts() {
    return this.http.get(`${this.allPostsLambdaUrl}`);
  }

  slugify(str: string) {
    const regex = new RegExp(/\W+/, "gm");
    const slug = str.replace(regex, " ").toLowerCase().split(" ").join("-");
    return slug;
  }
}
