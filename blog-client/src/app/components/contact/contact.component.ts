import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import * as siteData from '../../../assets/site.json';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  myEmail: string = siteData.site.email;

  constructor(private fb: FormBuilder) { 
    this.contactForm = this.fb.group({
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      message: new FormControl("", Validators.required)
    });
  }

  ngOnInit(): void {
  }

  submit() {
    // update `myEmail` in site.json with your current email
    window.location.href = `mailto:${this.myEmail}?body=${this.contactForm.value.message}`;
    this.contactForm.reset();
  }

}
