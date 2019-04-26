import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-professor-detalhe',
  templateUrl: 'professor-detalhe.html',
})
export class ProfessorDetalhePage {
  ref: FirebaseObjectObservable<any>;
  professor: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase
  ) {
    this.professor = this.navParams.get('professor') || {};
    this.ref = this.db.object('/professores/'+this.professor.$key);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfessorDetalhePage');
  }

  editarProfessor(){
    this.navCtrl.push('ProfessorEditarPage', {professor: this.professor});
  }
}
