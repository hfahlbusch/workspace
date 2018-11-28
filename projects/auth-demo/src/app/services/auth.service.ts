import { Injectable } from '@angular/core';

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
}
