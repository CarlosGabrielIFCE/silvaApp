import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-list',
  templateUrl: 'detail.html'
})
export class DetailPage {
  public register: any = {};
  public url: string = "https://silvaapi.herokuapp.com/";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: HttpClient) {
                let register_id = this.navParams.get("id");

                this.http.get(this.url + "register/" + register_id)
                  .subscribe(data => {
                    this.register = data;
                  })
                
              }


}
