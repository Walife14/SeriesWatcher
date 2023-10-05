import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent implements OnInit {

  usersOnAccount: { name: string, photoUrl: string}[] = [
    { "name": "Lucas", "photoUrl": "../../../../../assets/icons/UserIcon.png" },
    { "name": "Adam", "photoUrl": "../../../../../assets/icons/UserIcon.png" },
    { "name": "Mike", "photoUrl": "../../../../../assets/icons/UserIcon.png" },
    { "name": "Liam", "photoUrl": "../../../../../assets/icons/UserIcon.png" }
  ]

  constructor() { }

  ngOnInit() {
  }

}
