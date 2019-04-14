import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginRequest } from 'src/app/models/login/login-request.model';
import { Observable } from 'rxjs';


const urlLogin: string = 'http://www.mocky.io/v2/5cb37ea6300000ac2da78e37';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(protected http: HttpClient) { }

  autenticacao(request: LoginRequest): Observable<any> {

    return this.http.post<any>(urlLogin, request);
  }
}
