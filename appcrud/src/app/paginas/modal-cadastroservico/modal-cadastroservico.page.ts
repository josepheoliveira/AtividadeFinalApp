import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Cadastroservico, ServicoService } from 'src/app/servicos/servico.service';

@Component({
  selector: 'app-modal-cadastroservico',
  templateUrl: './modal-cadastroservico.page.html',
  styleUrls: ['./modal-cadastroservico.page.scss'],
})
export class ModalCadastroservicoPage implements OnInit {

  @Input() s: Cadastroservico;
  atualizar= false;

  dadosServico ={
    nome: '',
    descricao: '',
    valor : 0
  }

  constructor(private modalCtrl: ModalController, private service: ServicoService) { }

  ngOnInit() {
    if(this.s){
      this.dadosServico = this.s;
      this.atualizar = true;
     }
  }

  fecharModal(){
    this.modalCtrl.dismiss();
  }

  enviarFormulario(form: NgForm){
    const cadastroservico = form.value;
    if(this.atualizar){
      this.service.update(cadastroservico, this.s.id).subscribe(resposta => {
        this.modalCtrl.dismiss(resposta);
      });
    }else{
    this.service.create(cadastroservico).subscribe(resposta => {
      this.modalCtrl.dismiss();
    });
    }
  }

}
