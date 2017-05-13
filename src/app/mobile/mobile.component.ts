import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Route} from './mobile';
import {Log} from './croplogs';
import { ChartConst } from 'o2-chart-lib'; // <= Add

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  constructor(public http: Http) {
    this.barTypeName = ChartConst.BAR_CHART_TYPE_NAME;
    this.initilizeData();
  }

  ngOnInit() {
    this.getRoute();
    this.getCropLogs();
  }

  // FOR MAP
  lat: number = 51.678418;
  lon: number = 7.809007;
  t1 = Math.floor(Math.random() * (30 - 5 + 1) + 5);
  t2 = Math.floor(Math.random() * (30 - 5 + 1) + 5);
  t3 = Math.floor(Math.random() * (30 - 5 + 1) + 5);
  t4 = Math.floor(Math.random() * (30 - 5 + 1) + 5);
  t5 = Math.floor(Math.random() * (30 - 5 + 1) + 5);
  t6 = Math.floor(Math.random() * (30 - 5 + 1) + 5);

  h1 = Math.floor(Math.random() * (50 - 30 + 1) + 30);
  h2 = Math.floor(Math.random() * (50 - 30 + 1) + 30);
  h3 = Math.floor(Math.random() * (50 - 30 + 1) + 30);
  h4 = Math.floor(Math.random() * (50 - 30 + 1) + 30);
  h5 = Math.floor(Math.random() * (50 - 30 + 1) + 30);
  h6 = Math.floor(Math.random() * (50 - 30 + 1) + 30);

  f1 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
  f2 = this.f1 + Math.floor(Math.random() * (5 - 1 + 1) + 1);
  f3 = this.f2 + Math.floor(Math.random() * (5 - 1 + 1) + 1);
  f4 = this.f3 + Math.floor(Math.random() * (5 - 1 + 1) + 1);
  f5 = this.f4 + Math.floor(Math.random() * (5 - 1 + 1) + 1);
  f6 = this.f5 + Math.floor(Math.random() * (5 - 1 + 1) + 1);

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

  //FOR GRAPHICS
  chartType:string;
  configData:any;
  barDataJson:any;
  lineDataJson:any;
  barTypeName:string;

  private initilizeData(){
    this.configData ={
      "className":{
        "axis":"axis",
        "axisXBorder":"axis_x",
        "axisXText":"axis-x-text",
        "bar":"bar",
        "barValue":"bar-value",
        "line":"line",
        "multiLinePrefix":"line-",
        "grid":"grid",
        "pie":"pie",
        "pieInnerTitle": "pie-inner-title",
        "pieInnerRadius":"total",
        "histogram":"histogram",
        "histogramBar":"histogram-bar",
        "treemap":"treemap",
        "treemapLabel":"treemap-label",
        "packlayout":"packlayout",
        "packlayoutLabel":"packlayout-label",
      },
      "label": {
        "display":true,
      },
      "title": {
        "display": false,
        "name":"Title",
        "className":"chart-title",
        "height":30,
        "leftMargin":-20,
        "bottomMargin":10
      },
      "maxValue":{
        "auto":true,
        "x":100,
        "y":60,
      },
      "legend": {
        "display": true,
        "position": "right",
        "totalWidth":100,
        "initXPos":5,
        "initYPos":10,
        "rectWidth":10,
        "rectHeight":10,
        "xSpacing":2,
        "ySpacing":2,
      },
      "color":{
        "auto":true, //
        "defaultColorNumber":10,
        "opacity":1.0,
        "userColors":[
          "blue",
          "red",
          "green",
          "yellow",
          "PaleGoldenrod",
          "Khaki",
          "DarkKhaki",
          "Gold",
          "Cornsilk",
          "BlanchedAlmond",
          "Bisque",
          "NavajoWhite",
          "Wheat",
          "BurlyWood",
          "Tan",
          "RosyBrown",
          "SandyBrown",
          "Goldenrod",
          "DarkGoldenrod",
          "Peru",
          "Chocolate"
        ],
        "focusColor":"red",
      },
      "pie":{
        "innerRadius": {
          "percent":20,
          "title":"Total"
        },
        "value":{
          "display":true,
        },
        "percent":{
          "display":false,
        }
      },
      "line": {
        "legend":"lineEnd",
        "interpolate" :"linear",
      },
      "grid":{
        "x":{
          "display":true,
        },
        "y":{
          "display":true,
        },
      },
      "margin":{
        "top":30,
        "left":20,
        "right":20,
        "bottom":20,
        "between":5
      },
      "axis":{
        "rotation":0,
        "borderLineWidth":1,
        "xLabel":{
          "leftMargin":0,
          "bottomMargin":5
        },
        "yLabel":{
          "leftMargin":0,
          "bottomMargin":0
        },

      },
      "animation":{
        "enable":true,
        "duration":4000,
      },
    };

    this.barDataJson =
      {
        "series":[
          "Humidity",
          "Temperature"
        ],
        "data":[
          {
            "x": this.f1,
            "y": [this.h1, this.t1],
          },
          {
            "x": this.f2,
            "y": [this.h2, this.t2],
          },
          {
            "x": this.f3,
            "y": [this.h3, this.t3],
          },
          {
            "x": this.f4,
            "y": [this.h4, this.t4],
          },
          {
            "x": this.f5,
            "y": [this.h5, this.t5],
          },
          {
            "x": this.f6,
            "y": [this.h6, this.t6],
          },
        ],
      };

    this.lineDataJson =
      {
        "series":[
          "year",
          "sell",
        ],
        "data":[
          {
            "name": "software",
            "value":[
              {
                "x":"2010",
                "y":18
              },
              {
                "x":"2011",
                "y":22
              },
              {
                "x":"2012",
                "y":30
              },
              {
                "x":"2013",
                "y":31
              },
            ]
          },
          {
            "name": "hardware",
            "value":[
              {
                "x":"2010",
                "y":15
              },
              {
                "x":"2011",
                "y":16
              },
              {
                "x":"2012",
                "y":10
              },
              {
                "x":"2013",
                "y":21
              },
            ]
          },
          {
            "name": "device",
            "value":[
              {
                "x":"2010",
                "y":25
              },
              {
                "x":"2011",
                "y":26
              },
              {
                "x":"2012",
                "y":30
              },
              {
                "x":"2013",
                "y":31
              },
            ]
          },
          {
            "name": "others",
            "value":[
              {
                "x":"2010",
                "y":100
              },
              {
                "x":"2011",
                "y":16
              },
              {
                "x":"2012",
                "y":20
              },
              {
                "x":"2013",
                "y":41
              },
            ]
          },
        ],
      };
  }

}
