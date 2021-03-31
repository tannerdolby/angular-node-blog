import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  articles: any = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    console.log(this.articles);
    this.postService.getAllPosts().subscribe(response => {
      this.articles = response;
      this.articles.map((a: any) => {
        a.slug = this.slugify(a.title);
      });
    });
  }

  slugify(str: string) {
    const slug = this.postService.slugify(str);
    return slug;
  }
}
