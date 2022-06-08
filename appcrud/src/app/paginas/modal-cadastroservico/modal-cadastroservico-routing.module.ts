import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCadastroservicoPage } from './modal-cadastroservico.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCadastroservicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCadastroservicoPageRoutingModule {}
