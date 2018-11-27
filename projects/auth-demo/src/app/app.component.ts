import { Component, OnDestroy } from '@angular/core';
import { AuthService, TokenPayload } from './services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { Flight, FlightsService } from './services/flights.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public loggedIn$: Observable<TokenPayload>;
  public flights$: Observable<Flight[]>;

  public loginFormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService, private flightsService: FlightsService) { }

  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  public login(): void {
    this.loggedIn$ = this.authService.login(this.loginFormGroup.value);
  }

  public logout(): void {
    this.authService.logout();
  }

  public getFlights(): void {
    this.flights$ = this.flightsService.getFlights();
  }
}
