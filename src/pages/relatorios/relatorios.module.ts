import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RelatoriosPage } from './relatorios';
import { AngularFireDatabase } from 'angularfire2/database';


@NgModule({
  declarations: [
    RelatoriosPage,
  ],
  imports: [
    IonicPageModule.forChild(RelatoriosPage),
  ],
  exports: [
    RelatoriosPage
  ],
  providers: [
    AngularFireDatabase
  ]
})
export class RelatoriosPageModule {}
