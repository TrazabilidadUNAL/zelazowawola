import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Warehouse } from './warehouse';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})

export class WarehouseComponent implements OnInit {
  @Input() lgID: string;

  ware: Object;
  wareID: string = '1';
  url: string = 'http://localhost:3000/v1/warehouses';
  constructor(private http: Http) {
  }

  getWarehouse(): void {
    const id = this.wareID;
    this.http
      .get(`${this.url}/${id}`)
      .subscribe((res: Response) => this.ware = res.json());
    console.log(this.ware);
  }

  putWarehouse(form: any): void {
    const id = form['wID'];
    const name = form['wName'];
    const username = form['wUsername'];
    const password = form['wPassword'];
    const wModel = new Warehouse(name, username, password);
    const headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
    const options = new RequestOptions({headers: headers});

    console.log(JSON.stringify(wModel));
    this.http
      .put(`${this.url}/${id}`, JSON.stringify(wModel), options)
      .map(res => res.json()).subscribe( data => console.log(data));
  }

  deleteWarehouse(form: any): void {
    const id = this.wareID;
    const psw1 = form['delWarehouse'];
    const psw2 = form['confDelWarehouse'];
    if (psw1 === psw2) {
      this.http
        .delete(`${this.url}/${id}`)
        .subscribe((res: Response) => this.ware = res.json());
      console.log(this.ware);
      document.getElementById('confirm').hidden = false;
    }
  }

  ngOnInit() {
    this.getWarehouse();
  }

}
