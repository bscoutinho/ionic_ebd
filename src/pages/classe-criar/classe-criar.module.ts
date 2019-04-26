import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClasseCriarPage } from './classe-criar';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    ClasseCriarPage,
  ],
  imports: [
    IonicPageModule.forChild(ClasseCriarPage),
  ],
  exports: [
    ClasseCriarPage
  ],
  providers: [
    AngularFireDatabase
  ]
})
export class ClasseCriarPageModule {}
