import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'configuracoes',
    pathMatch: 'full'
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'pedido',
    loadChildren: () => import('./popup/pedido/pedido.module').then( m => m.PedidoPageModule)
  },
  {
    path: 'pedidomenu',
    loadChildren: () => import('./popup/pedidomenu/pedidomenu.module').then( m => m.PedidomenuPageModule)
  },
  {
    path: 'pedidohist',
    loadChildren: () => import('./pedidohist/pedidohist.module').then( m => m.PedidohistPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'detalhes-chef',
    loadChildren: () => import('./detalhes-chef/detalhes-chef.module').then( m => m.DetalhesChefPageModule)
  },
  {
    path: 'search-chef',
    loadChildren: () => import('./search-chef/search-chef.module').then( m => m.SearchChefPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
