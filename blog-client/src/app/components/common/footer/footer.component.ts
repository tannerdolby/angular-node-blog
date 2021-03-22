import { Component, OnInit } from '@angular/core';
import { site } from '../../../../assets/site.json';
import { socials } from '../../../../assets/site.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currYear: Number = 0;
  author: String = "";
  nav: any = {};
  socials: any = {};
  pathName: String = "";

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.pathName = window.location.pathname;
    this.currYear = this.getCurrentYear();
    this.author = site.author;
    this.socials = socials;
    this.nav = site.nav;
  }

  getCurrentYear() {
    const year = new Date().getFullYear();
    return year;
  }

  backToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}
