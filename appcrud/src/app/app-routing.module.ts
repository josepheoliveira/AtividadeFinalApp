import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./paginas/cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'modal-cliente',
    loadChildren: () => import('./paginas/modal-cliente/modal-cliente.module').then( m => m.ModalClientePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'empresa',
    loadChildren: () => import('./paginas/empresa/empresa.module').then( m => m.EmpresaPageModule)
  },
  {
    path: 'modal-empresa',
    loadChildren: () => import('./paginas/modal-empresa/modal-empresa.module').then( m => m.ModalEmpresaPageModule)
  },  {
    path: 'cadastroservico',
    loadChildren: () => import('./paginas/cadastroservico/cadastroservico.module').then( m => m.CadastroservicoPageModule)
  },
  {
    path: 'modal-cadastroservico',
    loadChildren: () => import('./paginas/modal-cadastroservico/modal-cadastroservico.module').then( m => m.ModalCadastroservicoPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
