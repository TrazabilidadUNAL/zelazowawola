import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  // Guardamos los datos que nos pasa el componente padre
  @Input() username: string = 'Producer';

  constructor() { }

  ngOnInit() {
  }

}

function hide_show(type): void {
  // const type = form['uName'];
  if (type === 'producer') {
    document.getElementById('nav-producer').className = 'collapse navbar-collapse show';
    document.getElementById('nav-warehouse').className = 'collapse navbar-collapse hide';
  } else if (type === 'warehouse') {
    document.getElementById('nav-warehouse').className = 'collapse navbar-collapse show';
    document.getElementById('nav-producer').className = 'collapse navbar-collapse hide';
  } else {
    document.getElementById('nav-warehouse').className = 'collapse navbar-collapse hide';
    document.getElementById('nav-producer').className = 'collapse navbar-collapse hide';
  }
}
