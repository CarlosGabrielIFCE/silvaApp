import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { HttpClient } from '@angular/common/http';
import { DetailPage } from '../detail/detail';
import { ContasPage } from '../contas/contas';
import { DiversosPage } from '../diversos/diversos';
import { CreateRegisterPage } from '../create-register/create-register';
import { ModalFaturaPage } from '../modal-fatura/modal-fatura';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private diversos: number = 0;
  private conta: number = 0;
  private url: string = "https://silvaapi.herokuapp.com/"
  private registers: any;
  private fatura: number = 0;

  constructor(public navCtrl: NavController,
              public httpService: HttpServiceProvider,
              public http: HttpClient,
              public modalCtrl: ModalController) {

                this.http.get(this.url + "register")
                .subscribe(data => {
                  this.registers = data;
                  for (let i = 0;i<this.registers.length;i++) {
                    this.fatura = this.fatura + parseFloat(this.registers[i].value);
                    if(this.registers[i].type=="Conta"){
                      this.conta = this.conta + parseFloat(this.registers[i].value);
                    }else {
                      this.diversos = this.diversos + parseFloat(this.registers[i].value);
                    }
                  }
                })  
  }

  goToContas() {
    this.navCtrl.push(ContasPage, {
    });
  }

  goToDiversos() {
    this.navCtrl.push(DiversosPage, {
    });
  }

  getRegisterInfo(id) {
    this.navCtrl.push(DetailPage, {
      id: id,
    })
  }

  createRegister() {
    this.navCtrl.push(CreateRegisterPage);
  }

  gerarFatura() {
    let modal = this.modalCtrl.create(ModalFaturaPage, {
      fatura: this.fatura,
      conta: this.conta,
      diversos: this.diversos
    });
    modal.present();
  }

}
