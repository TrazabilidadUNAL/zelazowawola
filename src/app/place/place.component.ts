import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Place } from './place';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})

export class PlaceComponent implements OnInit {
  place: Object;
  data: Object;

  constructor(private http: Http) { }

  getPlace(form: any): void {
    const idPrd = form['igetProducer'];
    const id = form['igetPlace'];
    this.http
      .get(`http://localhost:3000/v1/producers/${idPrd}`)
      .subscribe((res: Response) => this.place = res.json());
  }

  getProducer(form: any): void {
    const id = form['GetProducer'];
    this.http.get(`http://localhost:3000/v1/producers/${id}/places/1001`)
      .subscribe((res: Response) => this.data = res.json());
      console.log(this.data);
  }

  postPlace(form: any): void {
    const idPrd = form['postProducer'];
    const tag = form['pTag'];
    const lat = form['pLat'];
    const lon = form['pLon'];
    const newPlace = new Place(tag, lat, lon);
    console.log(JSON.stringify(newPlace));
    const headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
    const options = new RequestOptions({headers: headers});
    this.http
      .post(`http://localhost:3000/v1/producers/${idPrd}/places`, JSON.stringify(newPlace), {headers: headers})
      .map(res => res.json())
      .subscribe(
        data => console.log(data)
      );
  }

  putPlace(form: any): void {

  }

  deletePlace(form: any): void {

  }

  ngOnInit() {
  }

}
