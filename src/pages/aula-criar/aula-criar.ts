import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-aula-criar',
  templateUrl: 'aula-criar.html',
})
export class AulaCriarPage {
  aula: any;
  professores: FirebaseListObservable<any[]>;
  classes: FirebaseListObservable<any[]>;
  ref: FirebaseListObservable<any>;
  dtaAula: any;
  dtaObj: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public toastCtrl: ToastController
  ) {
    this.aula = {};
    this.ref = this.db.list('/aulas');
    this.professores = this.db.list('/professores');
    this.classes = this.db.list('/classes');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AulaCriarPage');
  }

  salvarAula(){

    /* passa a data no formato do DatePicker para o formato do banco */
    this.dtaObj = this.dtaAula.substring(8,10) + "/" + this.dtaAula.substring(5,7) + "/" + this.dtaAula.substring(0,4);
    this.aula["data"] = this.dtaObj;
    this.aula["mesano"] = this.dtaAula.substring(5,7) + "/" + this.dtaAula.substring(0,4);
    this.ref.push(this.aula).then(() => {
      this.navCtrl.setRoot('AulasPage');
    });
  }

  showToast(position: string, mensagem: string) {
    let toast = this.toastCtrl.create({
      message: mensagem,
      duration: 1000,
      position: position
    });

    toast.present(toast);
  }

}
