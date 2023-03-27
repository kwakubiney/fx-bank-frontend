import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { catchError, of } from 'rxjs';
import { signUpRequest } from 'src/app/models/signup.model';
import { signUp } from 'src/app/services/sign-up-service';
import { SignUpRemoteService } from 'src/app/services/sign-up.service';
import { PROVIDER_SERVICE_TOKEN, SIGNUP_SERVICE_TOKEN } from 'src/app/services/utilities';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {


  constructor(
    @Inject(SIGNUP_SERVICE_TOKEN) private signUpService: SignUpRemoteService,
    private messageService: MessageService,
    private router: Router
  ) {}

  signUpRequest:signUpRequest = {
    username:"",
    password: "",
  }

  displayModal = false
  errorMessage:string = ""

  signUp(){
    this.signUpService.signUp(this.signUpRequest).subscribe({
      next: (value) => {
        this.displayModal = !this.displayModal;
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'User account created successfully!',
        });
        this.signUpRequest.password=""
        this.signUpRequest.username=""
        this.router.navigate(['/'])
      },
      error: (error:Error) => {
        this.displayModal = !this.displayModal;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail:
            `${error.message}`,
        });
      },
    });
  }

  onSubmit(){
    this.signUp()
  }
}
