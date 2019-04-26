import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Relatorio02Page } from './relatorio02';
import { AngularFireDatabase } from 'angularfire2/database';


@NgModule({
  declarations: [
    Relatorio02Page,
  ],
  imports: [
    IonicPageModule.forChild(Relatorio02Page),
  ],
  exports: [
    Relatorio02Page
  ],
  providers: [
    AngularFireDatabase
  ]
})
export class Relatorio02PageModule {}
