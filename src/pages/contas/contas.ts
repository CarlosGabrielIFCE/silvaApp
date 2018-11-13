import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetCmp, ActionSheetController, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { DetailPage } from '../detail/detail';
import { HomePage } from '../home/home';

/**
 * Generated class for the ContasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contas',
  templateUrl: 'contas.html',
})
export class ContasPage {
  public registers: any;
  public url: string = "https://silvaapi.herokuapp.com/";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public actionCtrl: ActionSheetController,
    public toastCtrl: ToastController) {

    this.http.get(this.url + "register")
      .subscribe(data => {
        this.registers = data;
      })
  }

  goToDetail(id) {
    this.navCtrl.push(DetailPage, {
      id: id,
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContasPage');
  }

  deleteRegister(id) {
    let action = this.actionCtrl.create({
      title: "Opções",
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.http.delete(this.url + "register/" + id)
              .subscribe(() => {
                let toast = this.toastCtrl.create({
                  message: "Item excluido com sucesso!",
                  duration: 3000,
                })
                toast.present();
                this.navCtrl.push(HomePage);
              })
          }
        },
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            console.log("Botão de cancelar clicado!");
          }
        }
      ]
    });
    action.present();
  }

}
