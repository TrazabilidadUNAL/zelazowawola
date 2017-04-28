import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Place } from './place2';
import { Product } from './product2';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';

@Component({
  selector: 'app-pdashboard',
  templateUrl: './pdashboard.component.html',
  styleUrls: ['./pdashboard.component.css']
})

export class PdashboardComponent implements OnInit {
  //DECLARATIONS
  urlBase: string = 'http://localhost:3000/v1';
  lat: number = Math.random() * (5.280007 - 5.050936 + 1) + 5.050936;
  lng: number = Math.random() * (-74.288615 + 74.058528 + 1) + -74.058528;
  nameProduct: string;
  oPlaces: Object;
  oProducts: Object;
  idBase: number;
  namePlace: string = 'Univeridad Nacional de Colombia';

  constructor(public http: Http) { }

  //POST PLACE
  postPlace(form: any): void {
    const idPrd = this.idBase;
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
    //REFRESH PLACES
    this.http.get(`${this.urlBase}/producers/${tag}/places`)
      .subscribe((res: Response) => this.oPlaces = res.json());
    console.log(this.oPlaces);
  }

  //POST PRODUCT
  postProduct(form: any): void {
    const idPrd = this.idBase;
    const name = form['pName'];
    const newPlace = new Product(name);
    console.log(JSON.stringify(newPlace));
    const headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
    const options = new RequestOptions({headers: headers});
    this.http
        .post(`http://localhost:3000/v1/producers/${idPrd}/products`, JSON.stringify(newPlace), {headers: headers})
        .map(res => res.json())
        .subscribe(
            data => console.log(data)
        );
  }


  //GET PRODUCER PP
  getProducerPP(): void {
    //const tag = form['GetProducerPlaces'];
    this.idBase = Math.floor(Math.random() * (1500 - 0 + 1)) + 0;
    const tag = this.idBase;

    //PLACES
    this.http.get(`${this.urlBase}/producers/${tag}/places`)
      .subscribe((res: Response) => this.oPlaces = res.json());
    console.log(this.oPlaces);

    //PRODUCTS
    this.http.get(`${this.urlBase}/producers/${tag}/products`)
        .subscribe((res: Response) => this.oProducts = res.json());
    console.log(this.oProducts);
  }

  //SELECTED PLACE
  selectedPlace: Place;
  onSelectPL(place: Place): void {
    this.selectedPlace = place;
    this.lat = Math.random() * (5.280007 - 5.050936 + 1) + 5.050936;
    this.lng = Math.random() * (-74.288615 + 74.058528 + 1) + -74.058528;
    //this.lat = place.lat;
    //this.lng = place.lon;
  }

  //SELECTED PRODUCT
  selectedProduct: Product;
  onSelectPR(product: Product): void {
    this.selectedProduct = product;
    this.nameProduct = product.name;
  }

  ngOnInit() {
    this.getProducerPP();
  }

  refresh1(){
    //PLACES
    const tag = this.idBase;
    this.http.get(`${this.urlBase}/producers/${tag}/places`)
        .subscribe((res: Response) => this.oPlaces = res.json());
    console.log(this.oPlaces);
  }

  refresh2(){
    //PRODUCTS
    const tag = this.idBase;
    this.http.get(`${this.urlBase}/producers/${tag}/products`)
        .subscribe((res: Response) => this.oProducts = res.json());
    console.log(this.oProducts);
  }

}
