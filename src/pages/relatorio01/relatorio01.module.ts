import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Relatorio01Page } from './relatorio01';
import { AngularFireDatabase } from 'angularfire2/database';


@NgModule({
  declarations: [
    Relatorio01Page,
  ],
  imports: [
    IonicPageModule.forChild(Relatorio01Page),
  ],
  exports: [
    Relatorio01Page
  ],
  providers: [
    AngularFireDatabase
  ]
})
export class Relatorio01PageModule {}
