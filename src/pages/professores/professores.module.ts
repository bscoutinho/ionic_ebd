import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfessoresPage } from './professores';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    ProfessoresPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfessoresPage),
  ],
  exports: [
    ProfessoresPage
  ],
  providers: [
    AngularFireDatabase
  ]
})
export class ProfessoresPageModule {}
