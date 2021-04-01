import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  postsWithTag: any = [];
  tag: string = "";

  // re render postsWithTag when tag permalink is clicked on /blog/category/:tag page
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    // grab tag from URL `/blog/topics/:tag`
    this.tag = window.location.pathname.substr(13);
    this.postService.getPostsByTag(this.tag).subscribe((response: any) => {
      response.forEach((r: any) => {
        r.slug = this.postService.slugify(r.title);
      });
      console.log(response);
      this.postsWithTag = response;
    })
  }

  clear() {
    this.router.navigate(["/blog"]);
  }

  slugify(title: string) {
    return this.postService.slugify(title);
  }

  refresh(tag: string) {
    this.postService.getPostsByTag(tag).subscribe((response: any) => {
      response.map((r: any) => {
        r.slug = this.slugify(r.title);
      });
      this.postsWithTag = response;
    });
    this.tag = tag;
  }

}
