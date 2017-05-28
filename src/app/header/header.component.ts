import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {
  public user: string;
  public role: string;
  public lgID: string;

  logAct = true;
  prodAct = false;
  warhAct = false;

  constructor() { }

  onLoged() {
    let option = Math.floor((Math.random() * 100));
    if (this.user[0] === 'w') {
      this.role = 'warehouse';
      this.warhAct = true;
      this.prodAct = false;
      this.logAct = false;
    } else {
      this.role = 'producer';
      this.prodAct = true;
      this.warhAct = false;
      this.logAct = false;
    }
  }

  logOut() {
    this.logAct = true;
    this.prodAct = false;
    this.warhAct = false;
  }

  ngOnInit() {
  }

}
