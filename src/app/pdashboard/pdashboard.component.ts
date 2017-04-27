import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Place } from './place2';

@Component({
  selector: 'app-pdashboard',
  templateUrl: './pdashboard.component.html',
  styleUrls: ['./pdashboard.component.css']
})
export class PdashboardComponent implements OnInit {
  //VARS FOR MAPS
  lat: number = 0.0;
  lng: number = 0.0;

  //PLACES LIST
  PLACES: Place[] = [
    { id: 1, tag: "Place Nro1", lat: 1.1, lon: 2.1 },
    { id: 2, tag: "Place Nro2", lat: 1.2, lon: 2.2 },
    { id: 3, tag: "Place Nro3", lat: 1.3, lon: 2.3 },
    { id: 4, tag: "Place Nro4", lat: 1.4, lon: 2.4 },
    { id: 5, tag: "Place Nro5", lat: 1.5, lon: 2.5 },
  ];

  //P1: Place = { id: 1, tag: "Place Nro", lat: 1.1, lon: 2.1 };

  //GET PLACES OF PRODUCER
  dProPlaces: Object;
  urlProPlaces: string = 'http://localhost:3000/v1/producers';

  constructor(public http: Http) {}

  getProducerPlaces(form: any): void {
    const tag = form['GetProducer'];

    this.http.get(`${this.urlProPlaces}/${tag}/places`)
      .subscribe((res: Response) => this.dProPlaces = res.json());
    console.log(this.dProPlaces);
  }

  //SHOW DEMO PLACES
  selectedPlace: Place;
  onSelect(place: Place): void {
    this.selectedPlace = place;
    this.lat = place.lat;
    this.lng = place.lon;
  }

  ngOnInit() {
  }

}
