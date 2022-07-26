import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

// localhost:4200 -> localhost:4200/funcionarios

const routes: Routes = [
  {
    path: 'funcionarios',
    loadChildren: () => import('./funcionarios/funcionarios.module').then(m => m.FuncionariosModule),
    title: 'Projeto BCW20 Services Frontend Squad 06 - Funcionários'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'funcionarios', 
    title: 'Projeto BCW20 Services Frontend Squad 06 - Funcionários'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    title: 'Projeto BCW20 Services Frontend Squad 06 - Autenticação'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
