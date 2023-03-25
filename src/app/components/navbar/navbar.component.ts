import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token:string | null = null

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUser()
  }

  getUser(): void {
   this.token = localStorage.getItem("token")
   console.log(this.token)
  }

  signout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    this.router.navigateByUrl('/').then(() => {
      window.location.reload();
    });
  }
}
