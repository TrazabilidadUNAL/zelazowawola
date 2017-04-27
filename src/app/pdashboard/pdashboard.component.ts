import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Place } from './place2';
import { Product } from './product2';

@Component({
  selector: 'app-pdashboard',
  templateUrl: './pdashboard.component.html',
  styleUrls: ['./pdashboard.component.css']
})
export class PdashboardComponent implements OnInit {
  //DECLARATIONS
  urlBase: string = 'http://localhost:3000/v1';
  lat: number;
  lng: number;
  nameProduct: string;
  oProPlaces: Object;
  oProProducts: Object;

  constructor(public http: Http) {}

  //GET PRODUCER PP
  getProducerPP(): void {
    //const tag = form['GetProducerPlaces'];
    const tag = Math.floor(Math.random() * (1500 - 0 + 1)) + 0;

    //PLACES
    this.http.get(`${this.urlBase}/producers/${tag}/places`)
      .subscribe((res: Response) => this.oProPlaces = res.json());
    console.log(this.oProPlaces);

    //PRODUCTS
    this.http.get(`${this.urlBase}/producers/${tag}/products`)
        .subscribe((res: Response) => this.oProProducts = res.json());
    console.log(this.oProProducts);
  }

  //GET CROPS
  /*
  getCrops(form: any): void {
    const tag = Math.floor(Math.random() * (1500 - 0 + 1)) + 0;

    this.http.get(`${this.urlBase}/crops/${tag}`)
        .subscribe((res: Response) => this.dCrops = res.json());
    console.log(this.dCrops);
  }*/

  //SELECTED PLACE
  selectedPlace: Place;
  onSelectPL(place: Place): void {
    //SHOW INFO PLACE
    this.selectedPlace = place;
    this.lat = place.lat;
    this.lng = place.lon;
  }

  //SELECTED PRODUCT
  selectedProduct: Product;
  onSelectPR(product: Product): void {
    //SHOW INFO PLACE
    this.selectedProduct = product;
    this.nameProduct = product.name;
  }

  ngOnInit() {
    this.getProducerPP();
  }


}
