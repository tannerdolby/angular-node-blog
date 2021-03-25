import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import * as siteData from '../../../assets/site.json';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  contact: any;
  cName: any;
  cEmail: any;
  cMessage: any;
  myEmail: string = siteData.site.email;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      message: new FormControl("", Validators.required)
    });
    this.cName = this.name;
    this.cEmail = this.email;
    this.cMessage = this.message;
  }

  submit() {
    // update `myEmail` in site.json with your current email
    window.location.href = `mailto:${this.myEmail}?body=${this.contactForm.value.message}`;
    this.contactForm.reset();
    console.log(this.contactForm.get("name"));
  }

  get name() {
    return this.contactForm.get("name");
  }

  get email() {
    return this.contactForm.get("email");
  }

  get message() {
    return this.contactForm.get("message");
  }

}
