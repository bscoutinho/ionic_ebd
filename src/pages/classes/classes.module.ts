import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassesPage } from './classes';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    ClassesPage,
  ],
  imports: [
    IonicPageModule.forChild(ClassesPage),
  ],
  exports: [
    ClassesPage
  ],
  providers: [
    AngularFireDatabase
  ]
})
export class ClassesPageModule {}
