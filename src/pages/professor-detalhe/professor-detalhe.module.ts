import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfessorDetalhePage } from './professor-detalhe';

@NgModule({
  declarations: [
    ProfessorDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfessorDetalhePage),
  ],
  exports: [
    ProfessorDetalhePage
  ]
})
export class ProfessorDetalhePageModule {}
