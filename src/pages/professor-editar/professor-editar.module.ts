import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfessorEditarPage } from './professor-editar';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    ProfessorEditarPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfessorEditarPage),
  ],
  exports: [
    ProfessorEditarPage
  ],
  providers: [
    AngularFireDatabase
  ]
})
export class ProfessorEditarPageModule {}
