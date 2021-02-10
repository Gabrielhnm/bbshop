import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {

  constructor(public loadingController: LoadingController) {
    
   }

  ngOnInit() {
  }

  async confirmaLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Confir',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
