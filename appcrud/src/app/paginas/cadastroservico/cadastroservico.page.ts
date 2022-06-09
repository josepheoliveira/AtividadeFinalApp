import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Cadastroservico, ServicoService } from 'src/app/servicos/servico.service';
import { ModalCadastroservicoPage } from '../modal-cadastroservico/modal-cadastroservico.page';

@Component({
    selector: 'app-cadastroservico',
    templateUrl: './cadastroservico.page.html',
    styleUrls: ['./cadastroservico.page.scss'],
})

export class CadastroservicoPage implements OnInit {
  cadastroservicos: Cadastroservico[];

  constructor(private service: ServicoService, private modalCtrl: ModalController,  private navController: NavController) { }

  showPageHome(){
    this.navController.navigateForward('home');
  }

  ngOnInit() {
    this.service.getAll().subscribe(resposta =>{
      this.cadastroservicos = resposta;
    });
  }

  remover(id:any){
    this.service.remove(id).subscribe( () =>{
      this.service.getAll().subscribe(resposta => {
        this.cadastroservicos = resposta;
      });
    });
  }

  novoServico(){
    this.modalCtrl.create({
      component: ModalCadastroservicoPage
    }).then(modal=>{
      modal.present()
      return modal.onDidDismiss();
    }).then(({data}) => {
      this.service.getAll().subscribe(resposta => {
        this.cadastroservicos = resposta;
      });
    });
  }

  atualizar(s: Cadastroservico){
    this.modalCtrl.create({
      component: ModalCadastroservicoPage,
      componentProps: {s}
    }).then(modal =>{
      modal.present();
      return modal.onDidDismiss();
    }).then(({data}) =>{
      this.service.getAll().subscribe(resposta =>{
        this.cadastroservicos = resposta;
      });
    });
  }

}
