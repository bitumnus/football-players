import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements DoCheck {

  isAuth: Boolean

  constructor(
    private router: Router,
    public auth: AuthService,
  ) {}

  ngDoCheck() {
    this.isAuth = this.auth.isAuth
  }

  goToPlayersPage() {
    this.router.navigate(['/players'])
  }

}
