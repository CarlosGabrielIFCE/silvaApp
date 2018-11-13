import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpServiceProvider {
  private url: string = "http://localhost:3000/";

  constructor(public http: HttpClient) {
  }

  getTypeRegister() {
    this.http.get(this.url + "paymentType")
      .subscribe(data => {
        console.log(data);
        return data;
      })      
  }

  getRegister() {
    this.http.get(this.url + "register")
      .subscribe(data => {
        return data;
      })
  }

}
