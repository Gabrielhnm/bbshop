import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicoaltPageRoutingModule } from './servicoalt-routing.module';

import { ServicoaltPage } from './servicoalt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicoaltPageRoutingModule
  ],
  declarations: [ServicoaltPage]
})
export class ServicoaltPageModule {}
