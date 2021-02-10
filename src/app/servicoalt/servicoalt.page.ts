import { Component, OnInit } from '@angular/core';
import { Servico } from "../models/servico";
import {
ToastController,
LoadingController,
NavController
} from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";


@Component({
  selector: 'app-servicoalt',
  templateUrl: './servicoalt.page.html',
  styleUrls: ['./servicoalt.page.scss'],
})
export class ServicoaltPage implements OnInit {
servico = {} as Servico;

  
 constructor(
private toastCtrl: ToastController,
private loadingCtrl: LoadingController,
private afAuth: AngularFireAuth,
private firestore: AngularFirestore,
private navCtrl: NavController
) {}

  ngOnInit() {
  }

  async criarPost(post: Servico) {
    if (this.validarFormulario()) {
    let loader = await this.loadingCtrl.create({   
    message: "Salvando..."
    });
    loader.present();

    try {
      await this.firestore.collection("servico").add(post);//cria a "tabela" post no banco
      } catch (e) {
      this.showToast(e);
      }
      loader.dismiss();
      this.navCtrl.navigateRoot("agendamento");
      }
      }

      validarFormulario() {
       
        if (!this.servico.formapgt) {
        this.showToast("Escolha a Forma de Pagamento");
        return false;
        }
        if (!this.servico.horario) {
          this.showToast("Selecione o Horário");
          return false;
          }
          if (!this.servico.texto) {
            this.showToast("Informe o nome");
            return false;
          }
          if (!this.servico.corte) {
            this.showToast("Selecione o Serviço");
            return false;
            }
          this.showToast("Serviço registrado");
        return true;
        
        }
        
        showToast(mensagem: string) {
        this.toastCtrl
        .create({
        color: 'dark',
        message: mensagem,
        duration: 3000
        })
        .then(toastData => toastData.present());
        }

        
        
}
