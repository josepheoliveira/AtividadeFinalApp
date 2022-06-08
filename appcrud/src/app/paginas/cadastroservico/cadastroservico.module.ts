import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroservicoPageRoutingModule } from './cadastroservico-routing.module';

import { CadastroservicoPage } from './cadastroservico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroservicoPageRoutingModule
  ],
  declarations: [CadastroservicoPage]
})
export class CadastroservicoPageModule {}
