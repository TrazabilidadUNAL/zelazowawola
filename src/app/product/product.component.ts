import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Place } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  place: Object;
  data: Object;

  constructor(private http: Http) { }


  getPlace(form: any): void {
    const id = form['GetPlace'];
    this.http.get(`http://localhost:3000/v1/producers/1/places/${id}`)
      .subscribe((res: Response) => this.data = res.json());
      console.log(this.data);
  }

  postPlace(form: any): void {
    const idPrd = form['postPlace'];
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
