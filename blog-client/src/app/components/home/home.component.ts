import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recent: any;
  tags: String[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((response: any) => {
      response.data.forEach((r: any) => {
        r.date = new Date(r.date);
        r.slug = this.postService.slugify(r.title);
        this.tags = r.tags;
      });
      console.log(response);
      // get the 3 most recent blog posts
      this.recent = response.sort((a: any, b: any) => a.date - b.date).slice(0, 3);
    });
  }
}
