import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-producers',
  templateUrl: './producers.component.html',
  styleUrls: ['./producers.component.css']
})
export class ProducersComponent implements OnInit {

  message: string;
  constructor(private http: Http) {
    http.get('http://localhost:3000/v1/producers/1')
      .subscribe(res => this.message = res.json());
  }

  ngOnInit() {
  }

}
