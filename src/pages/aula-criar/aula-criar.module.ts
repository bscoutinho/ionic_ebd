import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AulaCriarPage } from './aula-criar';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    AulaCriarPage,
  ],
  imports: [
    IonicPageModule.forChild(AulaCriarPage),
  ],
  exports: [
    AulaCriarPage
  ],
  providers: [
    AngularFireDatabase
  ]
})
export class AulaCriarPageModule {}
