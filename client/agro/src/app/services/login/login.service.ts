import { LocalStorageService } from './../local-storage.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginRequest } from 'src/app/models/login/login-request.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


const urlLogin: string = 'http://localhost:3000/api/Users/login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(protected http: HttpClient,
              private localStorageService: LocalStorageService,
              private router: Router) { }

  autenticacao(request: LoginRequest): Observable<any> {
    return this.http.post<any>(urlLogin, {
        email: request.email,
        password: request.password,
    });
  }

  logout(): void {
    this.localStorageService.remove('userToken');
    this.router.navigate(['login']);
  }
}
