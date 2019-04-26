import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventoDetalhePage } from './evento-detalhe';

@NgModule({
  declarations: [
    EventoDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(EventoDetalhePage),
  ],
  exports: [
    EventoDetalhePage
  ]
})
export class EventoDetalhePageModule {}
