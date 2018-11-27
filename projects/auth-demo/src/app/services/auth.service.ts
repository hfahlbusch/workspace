import { Host, Injectable, Injector, Self, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenService } from './token.service';

export interface TokenPayload {
  username: string;
  exp: number;
}

interface Credentials {
  username: string;
  password: string;
}

interface AuthInfo {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private tokenService: TokenService, private httpClient: HttpClient, private jwtHelperService: JwtHelperService) { }

  public isLoggedIn(): boolean {
    const token: string | undefined = this.tokenService.getToken();
    return token && !this.jwtHelperService.isTokenExpired(token);
  }

  public login(credentials: Credentials): Observable<TokenPayload> {
    return this.httpClient.post<AuthInfo>('/api/login', credentials).pipe(
      tap(({token}) => this.tokenService.setToken(token)),
      map(({token}) => this.jwtHelperService.decodeToken(token))
    );
  }

  public logout(): void {
    this.tokenService.clearToken();
  }
}
