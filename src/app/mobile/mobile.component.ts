import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Route} from './mobile';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  id: string;
  origin_id: string;

  dRoute: Object;

  getRoute(form: any): void {
    const id = form['GetRoute'];

    this.http.get(`http://localhost:3000/v1/routes/1`)
        .subscribe((res: Response) => this.dRoute = res.json());
    console.log(this.dRoute);
  }
/*
  selectedRoute: Route;
  onSelectRo(route: Route): void {
    this.selectedRoute = route;
    this.id = route.id;
    this.origin_id = route.origin_id;
  }
*/
  constructor(public http: Http) { }

  ngOnInit() {
  }



}
