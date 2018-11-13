import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-create-register',
  templateUrl: 'create-register.html',
})
export class CreateRegisterPage {
  paymentType : any;
  register = {type: "", value: ""}
  private url: string = "https://silvaapi.herokuapp.com/"

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: HttpClient,
              public toast: ToastController) {
                this.http.get(this.url + "paymentType")
                  .subscribe(data => {
                    this.paymentType = data;
                  })
  }

  saveRegister(register) {
    this.http.post(this.url + "register", register)
      .subscribe(data => {
        let toast = this.toast.create({
          message: "Registro adicionado com sucesso!",
          duration: 3000
        })
        toast.present();
        this.navCtrl.push(HomePage);
      }), error => {
        console.log(error);
      }
  }

  backToLastPage() {
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateRegisterPage');
  }

}
