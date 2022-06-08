import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCadastroservicoPageRoutingModule } from './modal-cadastroservico-routing.module';

import { ModalCadastroservicoPage } from './modal-cadastroservico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCadastroservicoPageRoutingModule
  ],
  declarations: [ModalCadastroservicoPage]
})
export class ModalCadastroservicoPageModule {}
