import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postData: any = {};
  allPosts: any = {};
  tags: String[] = [];
  pos: number = 0;
  updatePage: any = {};

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    // get the location of the current URLs path
    const slug = window.location.pathname.substr(6);
    const routerSlug = this.router.url.slice(6);
    
    this.postService.getPost(slug || routerSlug).subscribe((response: any) => {
      this.postData = response;
      this.tags = response.metadata.tags;
    });

    this.postService.getAllPosts().subscribe((response: any) => {
      this.allPosts = response;
      response.map((r: any) => {
        r.slug = this.postService.slugify(r.title);
      })
      this.pos = this.getPostIndex(this.postData, this.allPosts);
      console.log(this.pos);
    });
  }

  getPostIndex(data: any, allPosts: any) {
    let pos;
    if (data.post.slug || data.slug) {
      pos = allPosts.map((p: any) => p.slug).indexOf(data.post.slug || data.slug);
    }
    return pos;
  }

  nextPost(posts: any) {
    let index = this.pos;
    let p = index + 1 >= posts.length ? posts[0] : posts[index + 1];
    this.postService.getPost(p.slug).subscribe(response => {
      this.postData = response;
      if (this.pos >= posts.length - 1) {
        this.pos = 0;
      } else {
        this.pos += 1;
      }
      console.log(this.pos);
    });
  }

  prevPost(posts: any) {
    let index = this.pos;
    let p = index - 1 < 0 ? posts[posts.length - 1] : posts[index - 1];
    this.postService.getPost(p.slug).subscribe(response => {
      this.postData = response;
      if (this.pos <= 0) {
        this.pos = posts.length - 1;
      } else {
      this.pos -= 1;
      }
    });
  }

}
