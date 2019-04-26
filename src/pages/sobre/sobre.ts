import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html',
})
export class SobrePage {
  qtdeObj = [];
  soma: any;
  dtaObj: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public db: AngularFireDatabase,
              public platform: Platform) {


    this.dtaObj = "01/2017"

    /* Percorre a tabela classes por cada classe */
    this.db.list('/classes', { preserveSnapshot: true }).subscribe(snapshots => {
      snapshots.forEach(snapshot => {

        /* variável para pegar a descricção da classe */
        var turmas = snapshot.child("descricao").val();

        /* Percorre a tabela aulas do banco somando os valores dos alunos */
          this.db.list('/aulas', { preserveSnapshot: true, query: {orderByChild: 'mesano', equalTo: this.dtaObj,} })
          .subscribe(snapshots => {
            /* Zera a variável a cada iteração */
            this.qtdeObj = [];

            snapshots.forEach(snapshot => {
              /* se o nome da classe na aula for o mesmo da tabela classes, grava a qtde de alunos num array */
              if (turmas == snapshot.child("classe").val()) {
                this.qtdeObj.push(parseInt(snapshot.child("qtde").val()));
              }
            });

            /* usa o array com as qtdes de alunos para ser somado */
            this.soma = this.qtdeObj.reduce((a, b) => a + b, 0);
            console.log(turmas + "-" + this.soma);
          });
      });
    });


  }

}
