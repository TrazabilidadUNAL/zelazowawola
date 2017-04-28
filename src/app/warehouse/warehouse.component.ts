import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Warehouse } from './warehouse';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})

export class WarehouseComponent implements OnInit {
  ware: Object;
  url: string = 'http://localhost:3000/v1/warehouses';
  constructor(private http: Http) {
  }

  getWarehouse(form: any): void {
    const id = form['GetWarehouse'];
    this.http
      .get(`${this.url}/${id}`)
      .subscribe((res: Response) => this.ware = res.json());
    console.log(this.ware);
  }

  deleteWarehouse(form: any): void {
    const id = form['delWarehouse'];
    this.http
      .delete(`${this.url}/${id}`)
      .subscribe((res: Response) => this.ware = res.json());
    console.log(this.ware);
  }

  ngOnInit() {
  }

}
