import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {

  navOpen: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onScroll(event: any) {
    this.navOpen = false;
  }

  // Added this so that when a user scrolls whilst navbar open the navbar collapses
  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    this.navOpen = false;
  }
}
