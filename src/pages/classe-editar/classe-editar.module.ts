import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClasseEditarPage } from './classe-editar';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    ClasseEditarPage,
  ],
  imports: [
    IonicPageModule.forChild(ClasseEditarPage),
  ],
  exports: [
    ClasseEditarPage
  ],
  providers: [
    AngularFireDatabase
  ]
})
export class ClasseEditarPageModule {}
