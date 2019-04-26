import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClasseDetalhePage } from './classe-detalhe';

@NgModule({
  declarations: [
    ClasseDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(ClasseDetalhePage),
  ],
  exports: [
    ClasseDetalhePage
  ]
})
export class ClasseDetalhePageModule {}
