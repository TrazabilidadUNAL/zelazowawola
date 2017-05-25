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

  lat: number = 4.8;
  lon: number = -74;

  latCentral: number = 4.8;
  lonCentral: number = -74;

  markers: Object = [
    {
      lat: 0.0,
      lon: 0.0,
      label: '0',
      draggable: true
    },
    {
      lat: 0.0,
      lon: 0.0,
      label: '1',
      draggable: false
    },
    {
      lat: 0.0,
      lon: 0.0,
      label: '2',
      draggable: true
    },
    {
      lat: 0.0,
      lon: 0.0,
      label: '3',
      draggable: true
    },
    {
      lat: 0.0,
      lon: 0.0,
      label: '4',
      draggable: true
    },
    {
      lat: 0.0,
      lon: 0.0,
      label: '5',
      draggable: true
    },
    {
      lat: 0.0,
      lon: 0.0,
      label: '6',
      draggable: true
    },
    {
      lat: 0.0,
      lon: 0.0,
      label: '7',
      draggable: true
    },
    {
      lat: 0.0,
      lon: 0.0,
      label: '8',
      draggable: true
    },
    {
      lat: 0.0,
      lon: 0.0,
      label: '9',
      draggable: true
    },
    {
      lat: 0.0,
      lon: 0.0,
      label: '10',
      draggable: true
    }
  ];

  createRange(markers) {
    let latMax = -80;
    let latMin = 20;
    let lonMax = -80;
    let lonMin = 20;
    let latVar = 4.3449004;
    let lonVar = -74.812129;
    let mOnepOne1 = Math.random() < 0.5 ? -1 : 1;
    let mOnepOne2;
    for (let i = 0; i < 11; i++) {
      mOnepOne2 = Math.random() < 0.5 ? -1 : 1;
      latVar = latVar + Math.random() * 0.096*mOnepOne2;
      lonVar = lonVar + mOnepOne1*Math.random() * 0.06;
      if (latVar > latMax) { latMax = latVar; }
      if (latVar < latMin) { latMin = latVar; }
      if (lonVar > lonMax) { lonMax = lonVar; }
      if (lonVar < lonMin) { lonMin = lonVar; }
      markers[i].lat = latVar;
      markers[i].lon = lonVar;
    }
    this.latCentral = (latMax + latMin)/2.0;
    this.lonCentral = (lonMax + lonMin)/2.0;
    return markers;
  }

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
    this.createRange(this.markers);
    this.getRoute();
    this.getCropLogs();
    this.randomize();
  }

  // CHART
  // lineChart
  lineChartData: Array<any> = [
    { data: [13, 15, 18, 21, 24, 29, 28, 22, 20, 17, 14], label: 'Temperature' },
    { data: [28, 30, 34, 39, 66, 77, 69, 50, 38, 31, 29], label: 'Humidity' }
  ];
  lineChartLabels: Array < any > = [
    ['Origin', '12:00'],
    ['1', '12:15'],
    ['2', '12:30'],
    ['3', '12:45'],
    ['4', '13:00'],
    ['5', '13:15'],
    ['6', '13:30'],
    ['7', '13:45'],
    ['8', '14:00'],
    ['9', '14:15'],
    ['Final', '14:30']
  ];
  lineChartOptions: any = {
    responsive: true
  };
  lineChartType: string = 'line';

  randomize(): void {
    let hour = Math.floor((Math.random() * 23));
    let min = Math.floor((Math.random() * 44) + 15);
    let minutes, hours;
    for (let j = 0; j < this.lineChartLabels.length; j++) {
      min = min + Math.floor((Math.random() * 44) + 15);
      if (min > 59) {
        min = min - 60;
        hour = hour + 1;
        if (hour > 23) {
          hour = 0;
        }
      }
      if (min < 10) {
        minutes = '0' + min.toString();
      } else {
        minutes = min.toString();
      }
      if (hour < 10) {
        hours = '0' + hour.toString();
      } else {
        hours = hour.toString();
      }
      this.lineChartLabels[j][1] = hours + ':' + minutes;
    }

    for (let j = 0; j < this.lineChartData[0].data.length; j++) { // Temperature
      this.lineChartData[0].data[j] = Math.floor((Math.random() * 30) + 10);
    }
    for (let j = 0; j < this.lineChartData[0].data.length; j++) { // Humidity
      this.lineChartData[1].data[j] = Math.floor((Math.random() * 90) + 10);
    }
  }

  // events
  chartClicked(e: any): void {
    console.log(e);
  }

  chartHovered(e: any): void {
    console.log(e);
  }

}
