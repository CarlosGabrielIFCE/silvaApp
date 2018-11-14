import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-modal-fatura',
  templateUrl: 'modal-fatura.html',
})
export class ModalFaturaPage {

  @ViewChild('doughnutCanvas') doughnutCanvas;

  public fatura: number;
  public salario: number = 3600.0;
  public conta: number;
  public diversos: number;
  public boolean: boolean; 
  public contaPorc: number = 0;
  public diversosPorc: number = 0;
  public faturaPorc: number = 0;

  doughnutChart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fatura = this.navParams.get('fatura');
    this.conta = this.navParams.get('conta');
    this.diversos = this.navParams.get('diversos');
    this.boolean = this.salario > this.fatura? true: false;
    this.contaPorc = (this.conta/this.salario)*100;
    this.diversosPorc = (this.diversos/this.salario)*100;
    this.faturaPorc = ((this.salario - (this.diversos + this.conta))/this.salario)*100;
    console.log(this.faturaPorc);
  }



  ionViewDidLoad() {
    //Gráfico de pizza
  this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
 
    type: 'doughnut',
    data: {
        labels: ["Conta", "Diversos", "Livre"],
        datasets: [{
            label: '# of Votes',
            data: [this.contaPorc, this.diversosPorc, this.faturaPorc],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
            ]
        }]
    }

});
  }

  backHome() {
    this.navCtrl.pop();
  }



}
