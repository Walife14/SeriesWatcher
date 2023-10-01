import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  display1: boolean = false;
  display2: boolean = false;
  display3: boolean = false;
  display4: boolean = false;
  display5: boolean = false;
  display6: boolean = false;

  constructor() { }

  ngOnInit() {
  }
}
