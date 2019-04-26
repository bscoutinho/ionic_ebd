import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfessorCriarPage } from './professor-criar';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    ProfessorCriarPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfessorCriarPage),
  ],
  exports: [
    ProfessorCriarPage
  ],
  providers: [
    AngularFireDatabase
  ]
})
export class ProfessorCriarPageModule {}
