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

  constructor(private http: Http) { }

  getPlace(form: any): void {
    const idPrd = form['getProducer'];
    const id = form['getPlace'];
    this.http
      .request(`http://localhost:3000/v1/producers/${idPrd}/places/${id}`)
      .subscribe((res: Response) => this.place = res.json());
  }

  postPlace(form: any): void {

  }

  putPlace(form: any): void {

  }

  deletePlace(form: any): void {

  }

  ngOnInit() {
  }

}
