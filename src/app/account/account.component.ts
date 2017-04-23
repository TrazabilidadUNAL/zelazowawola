import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Producer} from '../producer/producer';
import {Warehouse} from './../warehouse/warehouse';
//import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
  constructor(public http: Http) {}

  postProducer(form: any): void {
    const first_name = form['pFirstName'];
    const last_name = form['pLastName'];
    const username = form['pUsername'];
    const password = form['pPassword'];
    const pModel = new Producer(first_name, last_name, username, password);
    const headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
    const options = new RequestOptions({headers: headers});

    console.log(JSON.stringify(pModel));
    this.http
      .post('http://localhost:3000/v1/producers', JSON.stringify(pModel), options)
      .map(res => res.json()).subscribe(data => console.log(data));
  }

  postWarehouse(form: any): void {
    const name = form['wName'];
    const username = form['wUsername'];
    const password = form['wPassword'];
    const wModel = new Warehouse(name, username, password);
    const headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
    const options = new RequestOptions({headers: headers});

    console.log(JSON.stringify(wModel));
    this.http
      .post('http://localhost:3000/v1/warehouses', JSON.stringify(wModel), options)
      .map(res => res.json()).subscribe(data => console.log(data));
  }

  ngOnInit() {
  }

}
