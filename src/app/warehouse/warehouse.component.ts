import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Warehouse} from './warehouse';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  data: Object;

  constructor(public http: Http) { }

  getWarehouse(form: any): void {
    const id = form['GetWarehouse'];
    this.http.request(`http://localhost:3000/v1/warehouses/${id}`)
      .subscribe((res: Response) => this.data = res.json());
  }

  ngOnInit() {
  }

}
