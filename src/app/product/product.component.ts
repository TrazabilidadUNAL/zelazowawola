import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Object;


  constructor(private http: Http) { }


  getProduct(form: any): void {
    const id = form['GetProduct'];
    this.http.get(`http://localhost:3000/v1/products/${id}`)
      .subscribe((res: Response) => this.product = res.json());
      console.log(this.product);
  }

  postProduct(form: any): void {
    const idPrd = form['postPlace'];
    const tag = form['pName'];
    const newProduct = new Product("Fodosagan");
    console.log(JSON.stringify(newProduct));
    const headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
    const options = new RequestOptions({headers: headers});
    this.http
      .post(`http://localhost:3000/v1/products`, JSON.stringify(newProduct), {headers: headers})
      .map(res => res.json())
      .subscribe(
        data => console.log(data)
      );
  }

  putProduct(form: any): void {

  }

  deleteProduct(form: any): void {

  }
  ngOnInit() {
  }

}
