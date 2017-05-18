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

  // prints latitude and longitude list
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


  // CHART

  // lineChart
  lineChartData: Array<any> = [
    { data: [13, 15, 18, 21, 24, 29, 28, 22, 20, 17, 14], label: 'Temperature' },
    { data: [28, 30, 34, 39, 66, 77, 69, 50, 38, 31, 29], label: 'Humidity' }
  ];
  lineChartLabels: Array < any > = [
    ['Tunja', '12:00'],
    ['Ventaquemada', '12:15'],
    ['Villapinzon', '12:30'],
    ['Choconta', '12:45'],
    ['El Sisga', '13:00'],
    ['Sesquile', '13:15'],
    ['Gachancipa', '13:30'],
    ['Tocancipa', '13:45'],
    ['Cajica', '14:00'],
    ['Chia', '14:15'],
    ['Bogota', '14:30']
  ];
  lineChartOptions: any = {
    responsive: true
  };
  lineChartType: string = 'line';

  // randomize(): void {
  //   let _lineChartData: Array<any> = new Array(this.lineChartData.length);
  //   for (let i = 0; i < this.lineChartData.length; i++) {
  //     _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
  //     for (let j = 0; j < this.lineChartData[i].data.length; j++) {
  //       _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
  //     }
  //   }
  //   this.lineChartData = _lineChartData;
  // }

  // events
  chartClicked(e: any): void {
    console.log(e);
  }

  chartHovered(e: any): void {
    console.log(e);
  }

}
