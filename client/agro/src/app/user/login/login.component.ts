import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginRequest } from 'src/app/models/login/login-request.model';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean;
  dataLogin: LoginRequest;
  obterAutenticacao: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit() {
    debugger
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.dataLogin  = {
      Email: this.loginForm.value.usuario,
      Password: this.loginForm.value.senha
    };

    this.autenticar(this.dataLogin);
  }

  autenticar(loginRequest: LoginRequest): void {

    this.obterAutenticacao = this.loginService.autenticacao(loginRequest).subscribe(
      (data: any) => {
        console.log('Login');
      },
      (error) => {

      });
  }

}
