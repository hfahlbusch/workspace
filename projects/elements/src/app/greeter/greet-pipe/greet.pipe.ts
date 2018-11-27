import { Pipe, PipeTransform } from '@angular/core';
import { GreeterService } from '../services/greeter.service';

@Pipe({
  name: 'greet'
})
export class GreetPipe implements PipeTransform {
  constructor(private greeterService: GreeterService) { }

  transform(name: string): string {
    return this.greeterService.greet(name);
  }
}
