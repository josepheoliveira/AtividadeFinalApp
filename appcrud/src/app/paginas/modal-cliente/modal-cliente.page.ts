import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal-cliente.page.html',
  styleUrls: ['./modal-cliente.page.scss'],
})
export class ModalClientePage implements OnInit {

  constructor(private modalCrtl: ModalController) { }

  ngOnInit() {
  }

  fecharModal(){
    this.modalCrtl.dismiss();
  }

  enviarFormulario(){
    
  }
}
