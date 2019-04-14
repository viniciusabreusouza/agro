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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    HomeComponent,
    AppLayoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ LoginService, LocalStorageService, HomeGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
