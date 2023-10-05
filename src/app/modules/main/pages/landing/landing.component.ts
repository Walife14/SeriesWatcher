import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  faqaria1: boolean = false;
  faqaria2: boolean = false;
  faqaria3: boolean = false;
  faqaria4: boolean = false;
  faqaria5: boolean = false;
  faqaria6: boolean = false;

  constructor() { }

  ngOnInit() {
  }
}
