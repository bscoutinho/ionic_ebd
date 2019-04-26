import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventosPage } from './eventos';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    EventosPage,
  ],
  imports: [
    IonicPageModule.forChild(EventosPage),
  ],
  exports: [
    EventosPage
  ],
  providers: [
    AngularFireDatabase
  ]
})
export class EventosPageModule {}
