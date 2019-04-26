import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AulaDetalhePage } from './aula-detalhe';

@NgModule({
  declarations: [
    AulaDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(AulaDetalhePage),
  ],
  exports: [
    AulaDetalhePage
  ]
})
export class AulaDetalhePageModule {}
