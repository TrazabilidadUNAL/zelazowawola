import {Component, OnInit} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Producer} from './producer';
// import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})
export class ProducerComponent implements OnInit {
  dProducer: Object;
  pID: number = Math.floor(Math.random() * (500 - 0 + 1)) + 0;
  urlProducer: string = 'http://localhost:3000/v1/producers';
  constructor(public http: Http) {}

  getProducer(): void {
    const id = this.pID;

    this.http.get(`${this.urlProducer}/${id}`)
        .subscribe((res: Response) => this.dProducer = res.json());
    console.log(this.dProducer);
  }

  putProducer(form: any): void {
    const id = this.pID;
    const first_name = form['pFirstName'];
    const last_name = form['pLastName'];
    const username = form['pUsername'];
    const password = form['pPassword'];
    const pModel = new Producer(first_name, last_name, username, password);
    const headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
    const options = new RequestOptions({headers: headers});

    console.log(JSON.stringify(pModel));
    this.http
      .put(`${this.urlProducer}/${id}`, JSON.stringify(pModel), options)
      .map(res => res.json()).subscribe( data => console.log(data));
  }

  deleteProducer(form: any): void {
    const id = this.pID;

    this.http.delete(`${this.urlProducer}/${id}`)
      .subscribe((res: Response) => this.dProducer = res.json());
    console.log(this.dProducer);
  }

  ngOnInit() {
    this.getProducer();
  }

}
