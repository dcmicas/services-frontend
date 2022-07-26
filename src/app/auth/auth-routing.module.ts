import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { Title } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Projeto BCW20 Services Frontend Squad 06 - Autenticação'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth/login',
    title: 'Projeto BCW20 Services Frontend Squad 06 - Autenticação'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
