import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Empresa, EmpresaService } from 'src/app/servicos/empresa.service';
import { ModalEmpresaPage } from '../modal-empresa/modal-empresa.page';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.page.html',
  styleUrls: ['./empresa.page.scss'],
})
export class EmpresaPage implements OnInit {

  empresas : Empresa[];
  constructor(private service : EmpresaService, private modalCtrl : ModalController, private navController: NavController) { }

  showPageHome(){
    this.navController.navigateForward('home');
  }

  ngOnInit() {
    this.service.getAll().subscribe(resposta =>{
      this.empresas = resposta;
    });
  }

  remover(id:any){
    this.service.remove(id).subscribe( () =>{
      this.service.getAll().subscribe(resposta => {
        this.empresas = resposta;
      });
    });
  }

  novaEmpresa(){
    this.modalCtrl.create({
      component: ModalEmpresaPage
    }).then(modal=>{
      modal.present()
      return modal.onDidDismiss();
    }).then(({data}) => {
      this.service.getAll().subscribe(resposta => {
        this.empresas= resposta;
      });
    });
  }
  
  atualizar(e: Empresa){
    this.modalCtrl.create({
      component: ModalEmpresaPage,
      componentProps: {e}
    }).then(modal =>{
      modal.present();
      return modal.onDidDismiss();
    }).then(({data}) =>{
      this.service.getAll().subscribe(resposta =>{
        this.empresas = resposta;
      });
    });
  }

}
