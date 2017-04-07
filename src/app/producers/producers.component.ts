import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Producer } from './producer';

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
  constructor(public http: Http) {
  }
  private producersUrl = 'http://localhost:3000/v1/producers';

  getProducer(form: any): void {
    const id = form['GetProducer'];
    this.http.request(`${this.producersUrl}/${id}`)
      .subscribe((res: Response) => this.data = res.json(), );
  }

  postProducer(): void {
    const producer1 = new Producer('andres', 'forero', 'afforeroc', 'hshdjn43985');
    const headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
    const options = new RequestOptions({ headers: headers });
    this.http.post('${this.producersUrl}', JSON.stringify(producer1), options)
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  ngOnInit() {
  }

}
