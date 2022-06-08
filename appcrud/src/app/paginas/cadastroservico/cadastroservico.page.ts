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
  cadastroservico: Cadastroservico[];

  constructor(private service: ServicoService, private modalCtrl: ModalController,  private navController: NavController) { }

  showPageHome(){
    this.navController.navigateForward('home');
  }

  ngOnInit() {
    this.service.getAll().subscribe(resposta =>{
      this.cadastroservico = resposta;
    });
  }

  remover(id:any){
    this.service.remove(id).subscribe( () =>{
      this.service.getAll().subscribe(resposta => {
        this.cadastroservico = resposta;
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
        this.cadastroservico= resposta;
      });
    });
  }

  atualizar(c: Cadastroservico){
    this.modalCtrl.create({
      component: ModalCadastroservicoPage,
      componentProps: {c}
    }).then(modal =>{
      modal.present();
      return modal.onDidDismiss();
    }).then(({data}) =>{
      this.service.getAll().subscribe(resposta =>{
        this.cadastroservico = resposta;
      });
    });
  }

}
