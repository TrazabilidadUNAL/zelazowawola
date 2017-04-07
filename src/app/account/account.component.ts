import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Producer} from './../producers/producer';
import {Warehouse} from './../warehouse/warehouse';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  data: Object;

  constructor(public http: Http) { }

  postProducer(form: any): void {
    const name = form['pName'];
    const lastname = form['pLastName'];
    const username = form['pUserame'];
    const password = form['pPassword'];
    const producer1 = new Producer(name, lastname, username, password);
    console.log(JSON.stringify(producer1));
    const headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
    const options = new RequestOptions({headers: headers});
    // this.http.post(`${this.producersUrl}`, JSON.stringify(producer1), options)
    //   .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
    //   .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    this.http.post('http://localhost:3000/v1/producers', JSON.stringify(producer1), {headers: headers})
      .map(res => res.json())
      .subscribe(
        data => console.log(data)
      );
  }

  postWarehouse(form: any): void {
    const name = form['wName'];
    const username = form['wUserame'];
    const password = form['wPassword'];
    const warehouse1 = new Warehouse(name, username, password);
    console.log(JSON.stringify(warehouse1));
    const headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
    const options = new RequestOptions({headers: headers});
    // this.http.post(`${this.producersUrl}`, JSON.stringify(producer1), options)
    //   .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
    //   .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    this.http.post('http://localhost:3000/v1/warehouses', JSON.stringify(warehouse1), {headers: headers})
      .map(res => res.json())
      .subscribe(
        data => console.log(data)
      );
  }

  ngOnInit() {
  }
  
}
