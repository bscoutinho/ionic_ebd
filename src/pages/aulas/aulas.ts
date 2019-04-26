import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-aulas',
  templateUrl: 'aulas.html',
})
export class AulasPage {
  aulas: FirebaseListObservable<any[]>;
  pronto: boolean;
  qtdeObj = [];
  dtaAula: any;
  dtaObj: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase
  ) {
    this.pronto = false;
    this.aulas = db.list('/aulas', {
      query: {
        limitToLast: 10
      }
    });

    this.aulas.subscribe(() => {
      this.pronto = true;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AulasPage');
  }

  adicionarAula(){
    this.navCtrl.push('AulaCriarPage');
  }

  detalhe(aula){
    this.navCtrl.push('AulaDetalhePage', {aula: aula});
  }

  pickDtaFinal(){

    this.dtaObj = this.dtaAula.substring(5,7) + "/" + this.dtaAula.substring(0,4);
    this.aulas = this.db.list('/aulas', {
      query: {
        orderByChild: 'mesano',
        equalTo: this.dtaObj
      }
    });
  }

  removeSelection(){
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }



}
