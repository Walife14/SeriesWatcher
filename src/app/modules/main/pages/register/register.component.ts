import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  stage: number = 4;

  constructor() { }

  ngOnInit() {
  }

  nextStage() {
    if (this.stage === 5) return
    return this.stage+=1
  }

  previousStage() {
    if (this.stage === 0) return
    return this.stage-=1
  }

}
