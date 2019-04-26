import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-aula-editar',
  templateUrl: 'aula-editar.html',
})
export class AulaEditarPage {
  aula: any;
  professores: FirebaseListObservable<any[]>;
  classes: FirebaseListObservable<any[]>;
  ref: FirebaseObjectObservable<any>;
  dtaObj: any;
  dtaAula: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public toastCtrl: ToastController
  ) {
    /* pega o registro extato pela chave e passa para uma variável */
    this.aula = this.navParams.get('aula') || {};
    this.ref = this.db.object('/aulas/'+this.aula.$key);

    /* passa a data no formato do banco para o formato do DatePicker */
    this.dtaAula =  this.aula["data"].substring(6,10) + "-" + this.aula["data"].substring(3,5) + "-" + this.aula["data"].substring(0,2);
    console.log(this.dtaAula);

    /*pega registros das tabelas professores e classes */
    this.professores = this.db.list('/professores');
    this.classes = this.db.list('/classes');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AulaEditarPage');
  }

  atualizarAula(){
    this.dtaObj = this.dtaAula.substring(8,10) + "/" + this.dtaAula.substring(5,7) + "/" + this.dtaAula.substring(0,4);
    this.aula["data"] = this.dtaObj;
    this.aula["mesano"] = this.dtaAula.substring(5,7) + "/" + this.dtaAula.substring(0,4);
    this.ref.update(this.aula).then(() => {
      this.navCtrl.setRoot('AulasPage');
    });
  }

  removerAula(){
    this.ref.remove().then(() => {
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
