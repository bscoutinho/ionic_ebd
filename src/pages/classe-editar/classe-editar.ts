import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-classe-editar',
  templateUrl: 'classe-editar.html',
})
export class ClasseEditarPage {
  classe: any;
  ref: FirebaseObjectObservable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public db: AngularFireDatabase
  ) {
    this.classe = this.navParams.get('classe') || {};
    this.ref = this.db.object('/classes/'+this.classe.$key);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClasseEditarPage');
  }

  atualizarClasse(){
    this.ref.update(this.classe).then(() => {
      this.navCtrl.setRoot('ClassesPage');
    });
  }

  removerClasse(){
    this.ref.remove().then(() => {
      this.navCtrl.setRoot('ClassesPage');
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
