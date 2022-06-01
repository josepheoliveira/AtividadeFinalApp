import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Empresa, EmpresaService } from 'src/app/servicos/empresa.service';
import { ModalEmpresaPage } from '../modal-empresa/modal-empresa.page';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.page.html',
  styleUrls: ['./empresa.page.scss'],
})
export class EmpresaPage implements OnInit {

  empresa : Empresa[];
  constructor(private service : EmpresaService, private modalCtrl : ModalController) { }

  ngOnInit() {
    this.service.getAll().subscribe(resposta =>{
      this.empresa = resposta;
    });
  }

  remover(id:any){
    this.service.remove(id).subscribe( () =>{
      this.service.getAll().subscribe(resposta => {
        this.empresa = resposta;
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
        this.empresa= resposta;
      });
    });
  }
  
  atualizar(c: Empresa){
    this.modalCtrl.create({
      component: ModalEmpresaPage,
      componentProps: {c}
    }).then(modal =>{
      modal.present();
      return modal.onDidDismiss();
    }).then(({data}) =>{
      this.service.getAll().subscribe(resposta =>{
        this.empresa = resposta;
      });
    });
  }

}
