import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalFaturaPage } from './modal-fatura';

@NgModule({
  declarations: [
    ModalFaturaPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalFaturaPage),
  ],
})
export class ModalFaturaPageModule {}
