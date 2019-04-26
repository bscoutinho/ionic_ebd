import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventoCriarPage } from './evento-criar';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    EventoCriarPage,
  ],
  imports: [
    IonicPageModule.forChild(EventoCriarPage),
  ],
  exports: [
    EventoCriarPage
  ],
  providers: [
    AngularFireDatabase
  ]
})
export class EventoCriarPageModule {}
