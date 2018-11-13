import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-modal-fatura',
  templateUrl: 'modal-fatura.html',
})
export class ModalFaturaPage {
  public fatura: number;
  public salario: number = 3600.0;
  public conta: number;
  public diversos: number;
  public boolean: boolean; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fatura = this.navParams.get('fatura');
    this.conta = this.navParams.get('conta');
    this.diversos = this.navParams.get('diversos');
    this.boolean = this.salario > this.fatura? true: false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalFaturaPage');
  }

  backHome() {
    this.navCtrl.pop();
  }



}
