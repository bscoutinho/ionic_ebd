import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventoEditarPage } from './evento-editar';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    EventoEditarPage,
  ],
  imports: [
    IonicPageModule.forChild(EventoEditarPage),
  ],
  exports: [
    EventoEditarPage
  ],
  providers: [
    AngularFireDatabase
  ]
})
export class EventoEditarPageModule {}
