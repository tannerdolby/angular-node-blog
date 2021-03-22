import { Component, OnInit } from '@angular/core';
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

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.tag = window.location.pathname.substr(15);
    console.log(this.router.url);
    console.log(this.tag);
    this.postService.getPostsByTag(this.tag).subscribe((response: any) => {
      response.forEach((r: any) => {
        r.slug = this.postService.slugify(r.title);
      });
      this.postsWithTag = response;
      console.log(response);
    })
  }

  clear() {
    this.router.navigate(["/blog"]);
  }

  slugify(title: string) {
    return this.postService.slugify(title);
  }

}
