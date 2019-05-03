import { DetalhesProdutoComponent } from './produtos/detalhes-produto/detalhes-produto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegistrarComponent } from './user/registrar/registrar.component';
import { HomeComponent } from './home/home.component';
import { HomeGuard } from './services/auth/home.guard';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { ProdutosComponent } from './produtos/produtos/produtos.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [HomeGuard] },
      { path: 'home', component: HomeComponent, canActivate: [HomeGuard] },
      { path: 'produtos', component: ProdutosComponent, canActivate: [HomeGuard] },
      { path: 'produtos/:id', component: DetalhesProdutoComponent, canActivate: [HomeGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
