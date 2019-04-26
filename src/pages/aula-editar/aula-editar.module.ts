import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AulaEditarPage } from './aula-editar';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    AulaEditarPage,
  ],
  imports: [
    IonicPageModule.forChild(AulaEditarPage),
  ],
  exports: [
    AulaEditarPage
  ],
  providers: [
    AngularFireDatabase
  ]
})
export class AulaEditarPageModule {}
