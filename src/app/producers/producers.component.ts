// Imports
import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Producer } from './producer';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-producers',
  templateUrl: './producers.component.html',
  styleUrls: ['./producers.component.css']
})
export class ProducersComponent implements OnInit{
  data: Object;
  show: boolean;
  constructor(public http: Http) {
  }
  private commentsUrl = 'http://localhost:3000/v1/producers';
  getProducer1(form: any): void {
    var id = form["sky"];
    this.show = true;
    this.http.request(`${this.commentsUrl}/${id}`)
      .subscribe((res: Response) => {
        this.data = res.json();
        this.show = false;
      });
  }

  /**
  getProducer2(): void {
    this.show = true;
    this.http.request(`${this.producersUrl}`)
      .subscribe((res: Response) => {
        this.data = res.json();
        this.show = false;
      });
  }**/

  ngOnInit() {
  }

}
