import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginRequest } from 'src/app/models/login/login-request.model';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  submitted: boolean;
  dataLogin: LoginRequest;
  obterAutenticacao: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private localSotrageService: LocalStorageService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.dataLogin  = {
      email: this.loginForm.value.usuario,
      password: this.loginForm.value.senha
    };

    this.autenticar(this.dataLogin);
  }

  autenticar(loginRequest: LoginRequest): void {

    this.obterAutenticacao = this.loginService.autenticacao(loginRequest).subscribe(
      (data: any) => {
        console.log('Login');
        if (data != null && data.id != null) {
          this.localSotrageService.setObject('userToken', data);
          this.router.navigate(['home']);
        }
      },
      (error) => {
        console.log('erro' + error)
      });
  }

  ngOnDestroy(): void {
    if (this.obterAutenticacao){
      this.obterAutenticacao.unsubscribe();
    }
  }

}
