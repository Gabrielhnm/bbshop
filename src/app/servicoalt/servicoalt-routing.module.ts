import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicoaltPage } from './servicoalt.page';

const routes: Routes = [
  {
    path: '',
    component: ServicoaltPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicoaltPageRoutingModule {}
