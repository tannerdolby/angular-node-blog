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
    console.log(slug);
    console.log(routerSlug);

    this.postService.getPost(slug).subscribe((response: any) => {
      this.postData = response;
      console.log(this.postData);
      this.tags = response.metadata.tags;
    });

    this.postService.getAllPosts().subscribe((response: any) => {
      this.allPosts = response;
      response.metadata.map((r: any) => {
        r.slug = this.postService.slugify(r.title);
      })
      this.pos = this.getPostIndex(this.allPosts);
    });
  }

  getPostIndex(allPosts: any) {
    let pos;
    allPosts.metadata.map((d: any) => {
      d.slug = this.postService.slugify(d.title);
    });
    pos = allPosts.metadata.map((p: any) => p.slug).indexOf(this.postData.metadata[0].slug);
    return pos;
  }

  nextPost(posts: any) {
    let index = this.pos;
    let p = index + 1 >= posts.metadata.length ? posts.metadata[0] : posts.metadata[index + 1];
    this.postService.getPost(p.slug).subscribe(response => {
      this.postData = response;
      if (this.pos >= posts.metadata.length - 1) {
        this.pos = 0;
      } else {
        this.pos += 1;
      }
    });
    this.router.navigate([`/blog/${p.slug}`]);
  }

  prevPost(posts: any) {
    let index = this.pos;
    let p = index - 1 < 0 ? posts.metadata[posts.metadata.length - 1] : posts.metadata[index - 1];
    this.postService.getPost(p.slug).subscribe(response => {
      this.postData = response;
      if (this.pos <= 0) {
        this.pos = posts.metadata.length - 1;
      } else {
      this.pos -= 1;
      }
    });
    this.router.navigate([`/blog/${p.slug}`]);
  }

}
