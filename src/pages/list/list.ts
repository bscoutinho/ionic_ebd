import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  usuario: string;
  senha: string;
  usuarioObj: any;
  senhaObj: any;
  ref: FirebaseListObservable<any>;
  topics: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public db: AngularFireDatabase
  ) {
      /* código para inserir no banco login e senha caso a table login seja deletada */
      /*this.usuarioCtrl = "iejrj";
      this.senhaCtrl = "ebd";
      this.login = {};
      this.login["usuario"] = this.usuarioCtrl;
      this.login["senha"] = this.senhaCtrl;
      this.ref = this.db.list('/login');
      this.ref.push(this.login)*/

      this.topics = db.list('/login', { preserveSnapshot: true });
      this.topics.subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          this.usuarioObj = snapshot.child("usuario").val();
        this.senhaObj = snapshot.child("senha").val();
        });
      });
    }

  confereLogin(usuario, senha){
    this.usuario = usuario;
    this.senha = senha;
    if((usuario == this.usuarioObj) && (senha == this.senhaObj)) {
      console.log("aprovado");
    } else {
      console.log("reprovado");
    }
  }


}
