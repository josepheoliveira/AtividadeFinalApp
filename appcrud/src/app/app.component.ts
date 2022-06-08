import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cadastrar Como Cliente', url: '/cliente', icon: 'person' },
    { title: 'Cadastrar Como Empresa', url: '/empresa', icon: 'person' },
    { title: 'Cadastrar Serviço', url: '/cadastroservico', icon: 'bag' },
  ];
 
  constructor() {}
}
