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
  tags: String[] = [];

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    // get the location of the current URLs path
    const slug = window.location.pathname.substr(6);
    const routerSlug = this.router.url.slice(6);
    this.postService.getPost(slug || routerSlug).subscribe((response: any) => {
      this.postData = response;
      this.tags = response.metadata.tags;
      console.log(response);
    });
   
  }

}
