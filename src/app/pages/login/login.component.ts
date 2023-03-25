import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { signUpRequest } from 'src/app/models/signup.model';
import { LoginService } from 'src/app/services/login.service';
import { LOGIN_SERVICE_TOKEN } from 'src/app/services/utilities';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    @Inject(LOGIN_SERVICE_TOKEN) private loginService: LoginService,
    private messageService: MessageService,
    private router:Router
  ){}

  signUpRequest:signUpRequest = {
    username:"",
    password: "",
  }

  displayModal = false

  login(){
    this.loginService.login(this.signUpRequest)
    .subscribe({
      next: (value) => {
        localStorage.setItem("token", value.data?.token!)
        localStorage.setItem("user_id", value.data?.user_id!)
        this.displayModal = !this.displayModal;
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Logged in successfully!',
        });
        this.router.navigate(['dashboard']).then(() => 
          window.location.reload());
      },
      error: (error) => {
        this.displayModal = !this.displayModal;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail:
            'An unexpected error occurred while trying to login.',
        });
      },
    });
    this.signUpRequest.password=""
    this.signUpRequest.username=""
  }

  onSubmit(){
    this.login()
  }
}
