import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController, Platform } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-relatorio02',
  templateUrl: 'relatorio02.html',
})

export class Relatorio02Page {
  qtdeTotalJan = [];
  qtdeTotalFev = [];
  qtdeTotalMar = [];
  qtdeTotalAbr = [];
  qtdeTotalMai = [];
  qtdeTotalJun = [];
  qtdeTotalJul = [];
  qtdeTotalAgo = [];
  qtdeTotalSet = [];
  qtdeTotalOut = [];
  qtdeTotalNov = [];
  qtdeTotalDez = [];
  somaTotalJan = [];
  somaTotalFev = [];
  somaTotalMar = [];
  somaTotalAbr = [];
  somaTotalMai = [];
  somaTotalJun = [];
  somaTotalJul = [];
  somaTotalAgo = [];
  somaTotalSet = [];
  somaTotalOut = [];
  somaTotalNov = [];
  somaTotalDez = [];
  qtdeObjJan = [];
  qtdeObjFev = [];
  qtdeObjMar = [];
  qtdeObjAbr = [];
  qtdeObjMai = [];
  qtdeObjJun = [];
  qtdeObjJul = [];
  qtdeObjAgo = [];
  qtdeObjSet = [];
  qtdeObjOut = [];
  qtdeObjNov = [];
  qtdeObjDez = [];
  pronto: boolean;
  somaJan: any;
  somaFev: any;
  somaMar: any;
  somaAbr: any;
  somaMai: any;
  somaJun: any;
  somaJul: any;
  somaAgo: any;
  somaSet: any;
  somaOut: any;
  somaNov: any;
  somaDez: any;
  dtaRelatorio: any;
  dtaObjJan: any;
  dtaObjFev: any;
  dtaObjMar: any;
  dtaObjAbr: any;
  dtaObjMai: any;
  dtaObjJun: any;
  dtaObjJul: any;
  dtaObjAgo: any;
  dtaObjSet: any;
  dtaObjOut: any;
  dtaObjNov: any;
  dtaObjDez: any;
  totalJan = [];
  totalFev = [];
  totalMar = [];
  totalAbr = [];
  totalMai = [];
  totalJun = [];
  totalJul = [];
  totalAgo = [];
  totalSet = [];
  totalOut = [];
  totalNov = [];
  totalDez = [];

  constructor(public navParams: NavParams,
              public navCtrl: NavController,
              public db: AngularFireDatabase,
              public platform: Platform) {

  }

  pickDtaFinal(){
    /*LOOP JANEIRO*/
    /*pega os valores do componente datepicker para colocar na variável*/
    this.dtaObjJan = "01/" + this.dtaRelatorio.substring(0,4);

    /*zera o objeto a cada consulta para não duplicar o relatório*/
    this.totalJan = [];

    /* Percorre a tabela classes por cada classe */
    this.db.list('/classes', { preserveSnapshot: true }).subscribe(snapshots => {
      snapshots.forEach(snapshot => {

        /* variável para pegar a descricção da classe */
        var turmas = snapshot.child("descricao").val();

        /* Percorre a tabela aulas do banco somando os valores dos alunos */
        this.db.list('/aulas', { preserveSnapshot: true, query: {orderByChild: 'mesano', equalTo: this.dtaObjJan,} })
          .subscribe(snapshots => {
            /* Zera a variável a cada iteração */
            this.qtdeObjJan = [];
            this.qtdeTotalJan = [];

            snapshots.forEach(snapshot => {
              /* se o nome da classe na aula for o mesmo da tabela classes, grava a qtde de alunos num array */
              if (turmas == snapshot.child("classe").val()) {
                this.qtdeObjJan.push(parseInt(snapshot.child("qtde").val()));
              }

              /* cria o array para a soma de qtde de alunos de todas as classes */
              this.qtdeTotalJan.push(parseInt(snapshot.child("qtde").val()));

            });

            /* usa o array com as qtdes de alunos para ser somado */
            this.somaJan = this.qtdeObjJan.reduce((a, b) => a + b, 0);

            /* Soma da qtde de alunos de todas as classes no mês */
            this.somaTotalJan = this.qtdeTotalJan.reduce((a, b) => a + b, 0);

            /* pega os resultados e insere no objeto */
            this.totalJan.push({
              classe: turmas,
              alunos: this.somaJan
            })

          });
      });
    });

    /*LOOP FEVEREIRO*/
    /*pega os valores do componente datepicker para colocar na variável*/
    this.dtaObjFev = "02/" + this.dtaRelatorio.substring(0,4);

    /*zera o objeto a cada consulta para não duplicar o relatório*/
    this.totalFev = [];

    /* Percorre a tabela classes por cada classe */
    this.db.list('/classes', { preserveSnapshot: true }).subscribe(snapshots => {
      snapshots.forEach(snapshot => {

        /* variável para pegar a descricção da classe */
        var turmas = snapshot.child("descricao").val();

        /* Percorre a tabela aulas do banco somando os valores dos alunos */
        this.db.list('/aulas', { preserveSnapshot: true, query: {orderByChild: 'mesano', equalTo: this.dtaObjFev,} })
          .subscribe(snapshots => {
            /* Zera a variável a cada iteração */
            this.qtdeObjFev = [];
            this.qtdeTotalFev = [];

            snapshots.forEach(snapshot => {
              /* se o nome da classe na aula for o mesmo da tabela classes, grava a qtde de alunos num array */
              if (turmas == snapshot.child("classe").val()) {
                this.qtdeObjFev.push(parseInt(snapshot.child("qtde").val()));
              }

              /* cria o array para a soma de qtde de alunos de todas as classes */
              this.qtdeTotalFev.push(parseInt(snapshot.child("qtde").val()));

            });

            /* usa o array com as qtdes de alunos para ser somado */
            this.somaFev = this.qtdeObjFev.reduce((a, b) => a + b, 0);

            /* Soma da qtde de alunos de todas as classes no mês */
            this.somaTotalFev = this.qtdeTotalFev.reduce((a, b) => a + b, 0);

            /* pega os resultados e insere no objeto */
            this.totalFev.push({
              classe: turmas,
              alunos: this.somaFev
            })

          });
      });
    });

    /*LOOP MARÇO*/
    /*pega os valores do componente datepicker para colocar na variável*/
    this.dtaObjMar = "03/" + this.dtaRelatorio.substring(0,4);

    /*zera o objeto a cada consulta para não duplicar o relatório*/
    this.totalMar = [];

    /* Percorre a tabela classes por cada classe */
    this.db.list('/classes', { preserveSnapshot: true }).subscribe(snapshots => {
      snapshots.forEach(snapshot => {

        /* variável para pegar a descricção da classe */
        var turmas = snapshot.child("descricao").val();

        /* Percorre a tabela aulas do banco somando os valores dos alunos */
        this.db.list('/aulas', { preserveSnapshot: true, query: {orderByChild: 'mesano', equalTo: this.dtaObjMar,} })
          .subscribe(snapshots => {
            /* Zera a variável a cada iteração */
            this.qtdeObjMar = [];
            this.qtdeTotalMar = [];

            snapshots.forEach(snapshot => {
              /* se o nome da classe na aula for o mesmo da tabela classes, grava a qtde de alunos num array */
              if (turmas == snapshot.child("classe").val()) {
                this.qtdeObjMar.push(parseInt(snapshot.child("qtde").val()));
              }

              /* cria o array para a soma de qtde de alunos de todas as classes */
              this.qtdeTotalMar.push(parseInt(snapshot.child("qtde").val()));

            });

            /* usa o array com as qtdes de alunos para ser somado */
            this.somaMar = this.qtdeObjMar.reduce((a, b) => a + b, 0);

            /* Soma da qtde de alunos de todas as classes no mês */
            this.somaTotalMar = this.qtdeTotalMar.reduce((a, b) => a + b, 0);

            /* pega os resultados e insere no objeto */
            this.totalMar.push({
              classe: turmas,
              alunos: this.somaMar
            })

          });
      });
    });

    /*LOOP ABRIL*/
    /*pega os valores do componente datepicker para colocar na variável*/
    this.dtaObjAbr = "04/" + this.dtaRelatorio.substring(0,4);

    /*zera o objeto a cada consulta para não duplicar o relatório*/
    this.totalAbr = [];

    /* Percorre a tabela classes por cada classe */
    this.db.list('/classes', { preserveSnapshot: true }).subscribe(snapshots => {
      snapshots.forEach(snapshot => {

        /* variável para pegar a descricção da classe */
        var turmas = snapshot.child("descricao").val();

        /* Percorre a tabela aulas do banco somando os valores dos alunos */
        this.db.list('/aulas', { preserveSnapshot: true, query: {orderByChild: 'mesano', equalTo: this.dtaObjAbr,} })
          .subscribe(snapshots => {
            /* Zera a variável a cada iteração */
            this.qtdeObjAbr = [];
            this.qtdeTotalAbr = [];

            snapshots.forEach(snapshot => {
              /* se o nome da classe na aula for o mesmo da tabela classes, grava a qtde de alunos num array */
              if (turmas == snapshot.child("classe").val()) {
                this.qtdeObjAbr.push(parseInt(snapshot.child("qtde").val()));
              }

              /* cria o array para a soma de qtde de alunos de todas as classes */
              this.qtdeTotalAbr.push(parseInt(snapshot.child("qtde").val()));

            });

            /* usa o array com as qtdes de alunos para ser somado */
            this.somaAbr = this.qtdeObjAbr.reduce((a, b) => a + b, 0);

            /* Soma da qtde de alunos de todas as classes no mês */
            this.somaTotalAbr = this.qtdeTotalAbr.reduce((a, b) => a + b, 0);

            /* pega os resultados e insere no objeto */
            this.totalAbr.push({
              classe: turmas,
              alunos: this.somaAbr
            })

          });
      });
    });

    /*LOOP MAIO*/
    /*pega os valores do componente datepicker para colocar na variável*/
    this.dtaObjMai = "05/" + this.dtaRelatorio.substring(0,4);

    /*zera o objeto a cada consulta para não duplicar o relatório*/
    this.totalMai = [];

    /* Percorre a tabela classes por cada classe */
    this.db.list('/classes', { preserveSnapshot: true }).subscribe(snapshots => {
      snapshots.forEach(snapshot => {

        /* variável para pegar a descricção da classe */
        var turmas = snapshot.child("descricao").val();

        /* Percorre a tabela aulas do banco somando os valores dos alunos */
        this.db.list('/aulas', { preserveSnapshot: true, query: {orderByChild: 'mesano', equalTo: this.dtaObjMai,} })
          .subscribe(snapshots => {
            /* Zera a variável a cada iteração */
            this.qtdeObjMai = [];
            this.qtdeTotalMai = [];

            snapshots.forEach(snapshot => {
              /* se o nome da classe na aula for o mesmo da tabela classes, grava a qtde de alunos num array */
              if (turmas == snapshot.child("classe").val()) {
                this.qtdeObjMai.push(parseInt(snapshot.child("qtde").val()));
              }

              /* cria o array para a soma de qtde de alunos de todas as classes */
              this.qtdeTotalMai.push(parseInt(snapshot.child("qtde").val()));

            });

            /* usa o array com as qtdes de alunos para ser somado */
            this.somaMai = this.qtdeObjMai.reduce((a, b) => a + b, 0);

            /* Soma da qtde de alunos de todas as classes no mês */
            this.somaTotalMai = this.qtdeTotalMai.reduce((a, b) => a + b, 0);

            /* pega os resultados e insere no objeto */
            this.totalMai.push({
              classe: turmas,
              alunos: this.somaMai
            })

          });
      });
    });

    /*LOOP JUNHO*/
    /*pega os valores do componente datepicker para colocar na variável*/
    this.dtaObjJun = "06/" + this.dtaRelatorio.substring(0,4);

    /*zera o objeto a cada consulta para não duplicar o relatório*/
    this.totalJun = [];

    /* Percorre a tabela classes por cada classe */
    this.db.list('/classes', { preserveSnapshot: true }).subscribe(snapshots => {
      snapshots.forEach(snapshot => {

        /* variável para pegar a descricção da classe */
        var turmas = snapshot.child("descricao").val();

        /* Percorre a tabela aulas do banco somando os valores dos alunos */
        this.db.list('/aulas', { preserveSnapshot: true, query: {orderByChild: 'mesano', equalTo: this.dtaObjJun,} })
          .subscribe(snapshots => {
            /* Zera a variável a cada iteração */
            this.qtdeObjJun = [];
            this.qtdeTotalJun = [];

            snapshots.forEach(snapshot => {
              /* se o nome da classe na aula for o mesmo da tabela classes, grava a qtde de alunos num array */
              if (turmas == snapshot.child("classe").val()) {
                this.qtdeObjJun.push(parseInt(snapshot.child("qtde").val()));
              }

              /* cria o array para a soma de qtde de alunos de todas as classes */
              this.qtdeTotalJun.push(parseInt(snapshot.child("qtde").val()));

            });

            /* usa o array com as qtdes de alunos para ser somado */
            this.somaJun = this.qtdeObjJun.reduce((a, b) => a + b, 0);

            /* Soma da qtde de alunos de todas as classes no mês */
            this.somaTotalJun = this.qtdeTotalJun.reduce((a, b) => a + b, 0);

            /* pega os resultados e insere no objeto */
            this.totalJun.push({
              classe: turmas,
              alunos: this.somaJun
            })

          });
      });
    });

    /*LOOP JULHO*/
    /*pega os valores do componente datepicker para colocar na variável*/
    this.dtaObjJul = "07/" + this.dtaRelatorio.substring(0,4);

    /*zera o objeto a cada consulta para não duplicar o relatório*/
    this.totalJul = [];

    /* Percorre a tabela classes por cada classe */
    this.db.list('/classes', { preserveSnapshot: true }).subscribe(snapshots => {
      snapshots.forEach(snapshot => {

        /* variável para pegar a descricção da classe */
        var turmas = snapshot.child("descricao").val();

        /* Percorre a tabela aulas do banco somando os valores dos alunos */
        this.db.list('/aulas', { preserveSnapshot: true, query: {orderByChild: 'mesano', equalTo: this.dtaObjJul,} })
          .subscribe(snapshots => {
            /* Zera a variável a cada iteração */
            this.qtdeObjJul = [];
            this.qtdeTotalJul = [];

            snapshots.forEach(snapshot => {
              /* se o nome da classe na aula for o mesmo da tabela classes, grava a qtde de alunos num array */
              if (turmas == snapshot.child("classe").val()) {
                this.qtdeObjJul.push(parseInt(snapshot.child("qtde").val()));
              }

              /* cria o array para a soma de qtde de alunos de todas as classes */
              this.qtdeTotalJul.push(parseInt(snapshot.child("qtde").val()));

            });

            /* usa o array com as qtdes de alunos para ser somado */
            this.somaJul = this.qtdeObjJul.reduce((a, b) => a + b, 0);

            /* Soma da qtde de alunos de todas as classes no mês */
            this.somaTotalJul = this.qtdeTotalJul.reduce((a, b) => a + b, 0);

            /* pega os resultados e insere no objeto */
            this.totalJul.push({
              classe: turmas,
              alunos: this.somaJul
            })

          });
      });
    });

    /*LOOP AGOSTO*/
    /*pega os valores do componente datepicker para colocar na variável*/
    this.dtaObjAgo = "08/" + this.dtaRelatorio.substring(0,4);

    /*zera o objeto a cada consulta para não duplicar o relatório*/
    this.totalAgo = [];

    /* Percorre a tabela classes por cada classe */
    this.db.list('/classes', { preserveSnapshot: true }).subscribe(snapshots => {
      snapshots.forEach(snapshot => {

        /* variável para pegar a descricção da classe */
        var turmas = snapshot.child("descricao").val();

        /* Percorre a tabela aulas do banco somando os valores dos alunos */
        this.db.list('/aulas', { preserveSnapshot: true, query: {orderByChild: 'mesano', equalTo: this.dtaObjAgo,} })
          .subscribe(snapshots => {
            /* Zera a variável a cada iteração */
            this.qtdeObjAgo = [];
            this.qtdeTotalAgo = [];

            snapshots.forEach(snapshot => {
              /* se o nome da classe na aula for o mesmo da tabela classes, grava a qtde de alunos num array */
              if (turmas == snapshot.child("classe").val()) {
                this.qtdeObjAgo.push(parseInt(snapshot.child("qtde").val()));
              }

              /* cria o array para a soma de qtde de alunos de todas as classes */
              this.qtdeTotalAgo.push(parseInt(snapshot.child("qtde").val()));

            });

            /* usa o array com as qtdes de alunos para ser somado */
            this.somaAgo = this.qtdeObjAgo.reduce((a, b) => a + b, 0);

            /* Soma da qtde de alunos de todas as classes no mês */
            this.somaTotalAgo = this.qtdeTotalAgo.reduce((a, b) => a + b, 0);

            /* pega os resultados e insere no objeto */
            this.totalAgo.push({
              classe: turmas,
              alunos: this.somaAgo
            })

          });
      });
    });

    /*LOOP SETEMBRO*/
    /*pega os valores do componente datepicker para colocar na variável*/
    this.dtaObjSet = "09/" + this.dtaRelatorio.substring(0,4);

    /*zera o objeto a cada consulta para não duplicar o relatório*/
    this.totalSet = [];

    /* Percorre a tabela classes por cada classe */
    this.db.list('/classes', { preserveSnapshot: true }).subscribe(snapshots => {
      snapshots.forEach(snapshot => {

        /* variável para pegar a descricção da classe */
        var turmas = snapshot.child("descricao").val();

        /* Percorre a tabela aulas do banco somando os valores dos alunos */
        this.db.list('/aulas', { preserveSnapshot: true, query: {orderByChild: 'mesano', equalTo: this.dtaObjSet,} })
          .subscribe(snapshots => {
            /* Zera a variável a cada iteração */
            this.qtdeObjSet = [];
            this.qtdeTotalSet = [];

            snapshots.forEach(snapshot => {
              /* se o nome da classe na aula for o mesmo da tabela classes, grava a qtde de alunos num array */
              if (turmas == snapshot.child("classe").val()) {
                this.qtdeObjSet.push(parseInt(snapshot.child("qtde").val()));
              }

              /* cria o array para a soma de qtde de alunos de todas as classes */
              this.qtdeTotalSet.push(parseInt(snapshot.child("qtde").val()));

            });

            /* usa o array com as qtdes de alunos para ser somado */
            this.somaSet = this.qtdeObjSet.reduce((a, b) => a + b, 0);

            /* Soma da qtde de alunos de todas as classes no mês */
            this.somaTotalSet = this.qtdeTotalSet.reduce((a, b) => a + b, 0);

            /* pega os resultados e insere no objeto */
            this.totalSet.push({
              classe: turmas,
              alunos: this.somaSet
            })

          });
      });
    });

    /*LOOP OUTUBRO*/
    /*pega os valores do componente datepicker para colocar na variável*/
    this.dtaObjOut = "10/" + this.dtaRelatorio.substring(0,4);

    /*zera o objeto a cada consulta para não duplicar o relatório*/
    this.totalOut = [];

    /* Percorre a tabela classes por cada classe */
    this.db.list('/classes', { preserveSnapshot: true }).subscribe(snapshots => {
      snapshots.forEach(snapshot => {

        /* variável para pegar a descricção da classe */
        var turmas = snapshot.child("descricao").val();

        /* Percorre a tabela aulas do banco somando os valores dos alunos */
        this.db.list('/aulas', { preserveSnapshot: true, query: {orderByChild: 'mesano', equalTo: this.dtaObjOut,} })
          .subscribe(snapshots => {
            /* Zera a variável a cada iteração */
            this.qtdeObjOut = [];
            this.qtdeTotalOut = [];

            snapshots.forEach(snapshot => {
              /* se o nome da classe na aula for o mesmo da tabela classes, grava a qtde de alunos num array */
              if (turmas == snapshot.child("classe").val()) {
                this.qtdeObjOut.push(parseInt(snapshot.child("qtde").val()));
              }

              /* cria o array para a soma de qtde de alunos de todas as classes */
              this.qtdeTotalOut.push(parseInt(snapshot.child("qtde").val()));

            });

            /* usa o array com as qtdes de alunos para ser somado */
            this.somaOut = this.qtdeObjOut.reduce((a, b) => a + b, 0);

            /* Soma da qtde de alunos de todas as classes no mês */
            this.somaTotalOut = this.qtdeTotalOut.reduce((a, b) => a + b, 0);

            /* pega os resultados e insere no objeto */
            this.totalOut.push({
              classe: turmas,
              alunos: this.somaOut
            })

          });
      });
    });

    /*LOOP NOVEMBRO*/
    /*pega os valores do componente datepicker para colocar na variável*/
    this.dtaObjNov = "11/" + this.dtaRelatorio.substring(0,4);

    /*zera o objeto a cada consulta para não duplicar o relatório*/
    this.totalNov = [];

    /* Percorre a tabela classes por cada classe */
    this.db.list('/classes', { preserveSnapshot: true }).subscribe(snapshots => {
      snapshots.forEach(snapshot => {

        /* variável para pegar a descricção da classe */
        var turmas = snapshot.child("descricao").val();

        /* Percorre a tabela aulas do banco somando os valores dos alunos */
        this.db.list('/aulas', { preserveSnapshot: true, query: {orderByChild: 'mesano', equalTo: this.dtaObjNov,} })
          .subscribe(snapshots => {
            /* Zera a variável a cada iteração */
            this.qtdeObjNov = [];
            this.qtdeTotalNov = [];

            snapshots.forEach(snapshot => {
              /* se o nome da classe na aula for o mesmo da tabela classes, grava a qtde de alunos num array */
              if (turmas == snapshot.child("classe").val()) {
                this.qtdeObjNov.push(parseInt(snapshot.child("qtde").val()));
              }

              /* cria o array para a soma de qtde de alunos de todas as classes */
              this.qtdeTotalNov.push(parseInt(snapshot.child("qtde").val()));

            });

            /* usa o array com as qtdes de alunos para ser somado */
            this.somaNov = this.qtdeObjNov.reduce((a, b) => a + b, 0);

            /* Soma da qtde de alunos de todas as classes no mês */
            this.somaTotalNov = this.qtdeTotalNov.reduce((a, b) => a + b, 0);

            /* pega os resultados e insere no objeto */
            this.totalNov.push({
              classe: turmas,
              alunos: this.somaNov
            })

          });
      });
    });

    /*LOOP DEZEMBRO*/
    /*pega os valores do componente datepicker para colocar na variável*/
    this.dtaObjDez = "12/" + this.dtaRelatorio.substring(0,4);

    /*zera o objeto a cada consulta para não duplicar o relatório*/
    this.totalDez = [];

    /* Percorre a tabela classes por cada classe */
    this.db.list('/classes', { preserveSnapshot: true }).subscribe(snapshots => {
      snapshots.forEach(snapshot => {

        /* variável para pegar a descricção da classe */
        var turmas = snapshot.child("descricao").val();

        /* Percorre a tabela aulas do banco somando os valores dos alunos */
        this.db.list('/aulas', { preserveSnapshot: true, query: {orderByChild: 'mesano', equalTo: this.dtaObjDez,} })
          .subscribe(snapshots => {
            /* Zera a variável a cada iteração */
            this.qtdeObjDez = [];
            this.qtdeTotalDez = [];

            snapshots.forEach(snapshot => {
              /* se o nome da classe na aula for o mesmo da tabela classes, grava a qtde de alunos num array */
              if (turmas == snapshot.child("classe").val()) {
                this.qtdeObjDez.push(parseInt(snapshot.child("qtde").val()));
              }

              /* cria o array para a soma de qtde de alunos de todas as classes */
              this.qtdeTotalDez.push(parseInt(snapshot.child("qtde").val()));

            });

            /* usa o array com as qtdes de alunos para ser somado */
            this.somaDez = this.qtdeObjDez.reduce((a, b) => a + b, 0);

            /* Soma da qtde de alunos de todas as classes no mês */
            this.somaTotalDez = this.qtdeTotalDez.reduce((a, b) => a + b, 0);

            /* pega os resultados e insere no objeto */
            this.totalDez.push({
              classe: turmas,
              alunos: this.somaDez
            })

          });
      });
    });
  }

  removeSelection(){
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Relatorio02Page');
  }

}
