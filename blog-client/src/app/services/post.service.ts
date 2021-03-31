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
  blogPostFiles: string = "https://modest-bhabha-3a9de8.netlify.app/.netlify/functions/rawr";
  postsMetadata: string = "https://modest-bhabha-3a9de8.netlify.app/.netlify/functions/test";
  getHtml: string = "https://api.github.com/repos/tannerdolby/angular-node-blog-template/contents/dist/blog-client/pages/:splat";

  constructor(private http: HttpClient) { }

  // use file name not slug
  getPost(slug: string) {
    return this.http.get(`${this.blogPostFiles}?name=${slug}`);
  }

  getPostsFiles() {
    return this.http.get(`${this.blogPostFiles}`);
  }

  getAllPosts() {
    return this.http.get(`${this.postsMetadata}`, { 
      headers: { 
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept': "application/json"
    }});
  }

  getPostsByTag(tag: string) {
    return this.http.get(`${this.postsByTagLambdaUrl}/${tag}`);
  }

  slugify(str: string) {
    const regex = new RegExp(/\W+/, "gm");
    const slug = str.replace(regex, " ").toLowerCase().split(" ").join("-");
    return slug;
  }
}
