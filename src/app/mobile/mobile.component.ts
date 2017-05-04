import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Route} from './mobile';
import {Log} from './croplogs';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  lat: number = 51.678418;
  lon: number = 7.809007;

  

  dRoute: Object;
  cropLogs: Object;

  getRoute(): void {
    const id = Math.random() * 100;

    this.http.get(`http://localhost:3000/v1/routes/${id}`)
        .subscribe((res: Response) => this.dRoute = res.json());
    console.log(this.dRoute);
  }

  //prints latitude and longitude list
  selectedRoute: Route;
  
  onSelectRo(route: Route): void {
    this.selectedRoute = route;
    this.lat = Number(route.lat);
    this.lon = Number(route.lon);
  }

  getCropLogs(): void {
    const id = Math.random() * 100;

    this.http.get(`http://localhost:3000/v1/crops/${id}`)
        .subscribe((res: Response) => this.cropLogs = res.json());
    console.log(this.cropLogs);
  }

  // prints list of logs
  selectedLog: Log;
  logId: number;
  logDescription: string;
  logCreatedAt: string;

  onSelectLog(log: Log): void {
    this.selectedLog = log;
    this.logId = Number(log.id);
    this.logDescription = log.description;
    this.logCreatedAt = log.created_at;

  }
  constructor(public http: Http) { }

  ngOnInit() {
    this.getRoute();
    this.getCropLogs();
  }



}
