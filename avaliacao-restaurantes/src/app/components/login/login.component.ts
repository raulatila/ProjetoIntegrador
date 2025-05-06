import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { usuario, senha } = this.loginForm.value;

      if (usuario === 'admin' && senha === '123456') {
        this.router.navigate(['/home']);
      } else {
        alert('Usuário ou senha inválidos');
      }

      console.log(this.loginForm.value);
      this.router.navigate(['/restaurantes']);
    }
  }

  onCadastro() {
    this.router.navigate(['/usuarios']);
  }

  onRecuperarSenha() {
    alert('Recuperar senha ainda não implementado.');
  }
}

