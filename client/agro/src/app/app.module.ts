import { ProdutosService } from './services/produtos/produtos.service';
import { HomeGuard } from './services/auth/home.guard';
import { LocalStorageService } from './services/local-storage.service';
import { LoginService } from './services/login/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrarComponent } from './user/registrar/registrar.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProdutosComponent } from './produtos/produtos/produtos.component';
import { DetalhesProdutoComponent } from './produtos/detalhes-produto/detalhes-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    HomeComponent,
    AppLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    ProdutosComponent,
    DetalhesProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    // AngularFontAwesomeModule
  ],
  providers: [ LoginService, LocalStorageService, HomeGuard, ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
