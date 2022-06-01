import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Empresa, EmpresaService } from 'src/app/servicos/empresa.service';

@Component({
  selector: 'app-modal-empresa',
  templateUrl: './modal-empresa.page.html',
  styleUrls: ['./modal-empresa.page.scss'],
})
export class ModalEmpresaPage implements OnInit {

  @Input() e: Empresa;
  atualizar = false;

  dadosEmpresa ={
  nome : '',
  datadeabertura: '',
  cnpj: '',
  situacaocadastral: '',
  endereco: '',
  tipodeservico: '',
  telefone: ''
  }

  constructor(private modalCtrl : ModalController, private service : EmpresaService) { }

  ngOnInit() {
    if(this.e){
      this.dadosEmpresa = this.e;
      this.atualizar = true;
    }
  }

  fecharModal(){
    this.modalCtrl.dismiss();
  }

  enviarFormulario(form: NgForm){
    const empresa = form.value
    if(this.atualizar){
      this.service.update(empresa, this.e.id).subscribe(resposta => {
        this.modalCtrl.dismiss(resposta);
      });
    }else{
    this.service.create(empresa).subscribe(resposta => {
      this.modalCtrl.dismiss();
    });
    }
  }

}
