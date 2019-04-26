import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-professores',
  templateUrl: 'professores.html',
})
export class ProfessoresPage {
  professores: FirebaseListObservable<any[]>;
  pronto: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase
  ) {
    this.pronto = false;
    this.professores = db.list('/professores');
    this.professores.subscribe(() => {
      this.pronto = true;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfessoresPage');
  }

  adicionarProfessor(){
    this.navCtrl.push('ProfessorCriarPage');
  }

  detalhe(professor){
    this.navCtrl.push('ProfessorDetalhePage', {professor: professor});
  }
  


}
