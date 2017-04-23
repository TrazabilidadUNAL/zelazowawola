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
  place: Object;
  place01: Object;
  constructor(private http: Http) { }

  getWarehouse(form: any): void {
    const id = form['GetWarehouse'];
    this.http
      .get(`http://localhost:3000/v1/warehouses/${id}`)
      .subscribe((res: Response) => this.ware = res.json());
  }

  getWarehousePlace(form: any): void {
    const id = form['GetWarehouse'];
    this.http
      .get(`http://localhost:3000/v1/warehouses/${id}/places/1`)
      .subscribe((res: Response) => this.place = res.json());
  }

  // getWarehouseId(form: any): Observable<any> {
  //   const id = form['GetWarehouseId'];
  //   return this.http
  //     .get(`http://localhost:3000/v1/warehouses/` + '/?' + 'id' + '=' + id)
  //     .map(this.extractData)
  //     .catch(this.handleError);
  // }
  //
  // putWarehouse(form: any): Observable<any> {
  //   const id = form['wId'];
  //   const name = form['wName'];
  //   const username = form['wUserame'];
  //   const password = form['wPassword'];
  //   const warehouse1 = new Warehouse(name, username, password);
  //   console.log(JSON.stringify(warehouse1));
  //   const headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
  //   const options = new RequestOptions({headers: headers});
  //
  //   return this.http
  //       .put('http://localhost:3000/v1/warehouses', JSON.stringify(warehouse1), {headers: headers})
  //       .map(res => res.json())
  //       .catch(this.handleError);
  // }
  //
  // deleteWarehouseId(form: any): Observable<any> {
  //   const id = form['DelWarehouse'];
  //   return this.http
  //     .delete('http://localhost:3000/v1/warehouses/' + '/?' + 'id' + '=' + id)
  //     .map(this.extractData)
  //     .catch(this.handleError);
  // }
  //
  // private extractData(res: Response) {
  //     this.ware = res.json();
  //     return this.ware || {};
  // }
  //
  // private handleError(error: any) {
  //     const errMsg = (error.message) ? error.message :
  //         error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  //     console.error(errMsg);
  //     return Observable.throw(errMsg);
  // }

  ngOnInit() {
  }

}
