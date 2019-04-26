import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AulasPage } from './aulas';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    AulasPage,
  ],
  imports: [
    IonicPageModule.forChild(AulasPage),
  ],
  exports: [
    AulasPage
  ],
  providers: [
    AngularFireDatabase
  ]
})
export class AulasPageModule {}
