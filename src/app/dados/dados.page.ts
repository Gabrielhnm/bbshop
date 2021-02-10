import { Component, OnInit } from '@angular/core';
import { Dados } from "../models/dados";
import {
ToastController,
LoadingController,
NavController
} from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";


@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {
  dados = {} as Dados;

 constructor(
private toastCtrl: ToastController,
private loadingCtrl: LoadingController,
private afAuth: AngularFireAuth,
private firestore: AngularFirestore,
private navCtrl: NavController
) {}

  ngOnInit() {
  }

  async criarPost(post: Dados) {
    if (this.validarFormulario()) {
    let loader = await this.loadingCtrl.create({
    message: "Salvando..."
    });
    loader.present();

    try {
      await this.firestore.collection("dados").add(post);//cria a "tabela" post no banco
      } catch (e) {
      this.showToast(e);
      }
      loader.dismiss();
      this.navCtrl.navigateRoot("servicoalt");
      }
      }

      validarFormulario() {
        if (!this.dados.nomecompleto) {
        this.showToast("Escreva o Nome Completo");
        return false;
        }
        if (!this.dados.cpf) {
        this.showToast("Escreva o CPF");
        return false;
        }
        if (!this.dados.idade) {
          this.showToast("Escreva o Nome Completo");
          return false;
          }
        return true;
        }
        
        showToast(mensagem: string) {
        this.toastCtrl
        .create({
        message: mensagem,
        duration: 3000
        })
        .then(toastData => toastData.present());
        }
}
