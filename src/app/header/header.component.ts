import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {
  public role: string;
  public lgID: string;

  logAct = true;
  prodAct = false;
  warhAct = false;

  constructor() { }

  onLoged() {
    if (this.role === 'producer') {
      this.prodAct = true;
      this.warhAct = false;
      this.logAct = false;
    } else {
      if (this.role === 'warehouse') {
        this.warhAct = true;
        this.prodAct = false;
        this.logAct = false;
      } else {
        this.logAct = true;
        this.prodAct = false;
        this.warhAct = false;
      }
    }
  }

  ngOnInit() {
  }

}
