import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController, Platform } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-relatorios',
  templateUrl: 'relatorios.html',
})
export class RelatoriosPage {
  qtdeObj = [];
  pronto: boolean;
  soma: any;
  dtaRelatorio: any;
  dtaObj: any;
  relqtdeAlunos = [];

  constructor(public navParams: NavParams,
              public navCtrl: NavController,
              public db: AngularFireDatabase,
              public platform: Platform) {


    /* Percorre a tabela classes por cada classe */
    this.db.list('/classes', { preserveSnapshot: true }).subscribe(snapshots => {
      snapshots.forEach(snapshot => {

        /* variável para pegar a descricção da classe */
        var turmas = snapshot.child("descricao").val();

        /* Percorre a tabela aulas do banco somando os valores dos alunos */
        this.db.list('/aulas', { preserveSnapshot: true })
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

            /* pega os resultados e insere no objeto */
            this.relqtdeAlunos.push({
              classe: turmas,
              alunos: this.soma
            })

          });
      });
      this.pronto = true;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RelatoriosPage');
  }

  pickDtaFinal(){

    /*pega os valores do componente datepicker para colocar na variável*/
    this.dtaObj = this.dtaRelatorio.substring(5,7) + "/" + this.dtaRelatorio.substring(0,4);

    /*zera o objeto a cada consulta para não duplicar o relatório*/
    this.relqtdeAlunos = [];

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

            /* pega os resultados e insere no objeto */
            this.relqtdeAlunos.push({
              classe: turmas,
              alunos: this.soma
            })

          });
      });
    });

  }

  removeSelection(){
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

  relatorio01(){
    this.navCtrl.push('Relatorio01Page');
  }

  relatorio02(){
    this.navCtrl.push('Relatorio02Page');
  }

}
