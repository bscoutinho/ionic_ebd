import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-classe-criar',
  templateUrl: 'classe-criar.html',
})
export class ClasseCriarPage {
  classe: any;
  ref: FirebaseListObservable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public toastCtrl: ToastController
  ) {
    this.classe = {};
    this.ref = this.db.list('/classes');
    //this.classe["data"] = Date.now();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClasseCriarPage');
  }

  salvarClasse(){
    this.ref.push(this.classe).then(() => {
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
