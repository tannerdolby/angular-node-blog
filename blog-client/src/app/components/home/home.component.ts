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
    this.postService.getRecentPosts().subscribe((response: any) => {
      response.metadata.forEach((r: any) => {
        r.slug = this.postService.slugify(r.title);
        r.date = new Date(r.date);
        this.tags = r.tags;
      });
      this.recent = response.metadata;
    })
  }
}
