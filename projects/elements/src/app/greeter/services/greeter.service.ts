import { Injectable, Optional } from '@angular/core';
import { GreeterConfig } from '../greeter.config';

@Injectable()
export class GreeterService {
  constructor(@Optional() private greeterConfig: GreeterConfig) { }

  public greet(name: string): string {
    const greeting = `Hello ${name}`;

    if (this.greeterConfig && this.greeterConfig.showTimestamp) {
      return `[${new Date().toISOString()}] ${greeting}`;
    }

    return greeting;
  }
}
