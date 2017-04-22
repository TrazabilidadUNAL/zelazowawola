import {Component, OnInit} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Producer} from './producer';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})
export class ProducerComponent implements OnInit {
  data: Object;

  constructor(public http: Http) {
  }

  getProducer(form: any): void {
    const id = form['GetProducer'];
    this.http.get(`http://localhost:3000/v1/producers/${id}`)
        .subscribe((res: Response) => this.data = res.json());
    console.log(this.data);
  }

  postProducer(): void {
    const producer1 = new Producer('andres3', 'forero3', 'afforeroc', 'hshdjn43985');
    console.log(JSON.stringify(producer1));
    const headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
    const options = new RequestOptions({headers: headers});
    // this.http.post(`${this.producersUrl}`, JSON.stringify(producer1), options)
    //   .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
    //   .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    this.http.post('http://localhost:3000/v1/producers', JSON.stringify(producer1), {headers: headers})
        .map(res => res.json())
        .subscribe(
            data => console.log(data)
        );
  }

  ngOnInit() {
  }

}
