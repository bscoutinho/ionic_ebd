import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SobrePage } from './sobre';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    SobrePage,
  ],
  imports: [
    IonicPageModule.forChild(SobrePage),
  ],
  exports: [
    SobrePage
  ],
  providers: [
    AngularFireDatabase
  ]
})
export class SobrePageModule {}
