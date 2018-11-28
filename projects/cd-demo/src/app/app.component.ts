import { Component, DoCheck } from '@angular/core';
import { GreetingInfo } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  public name = 'Florian';
  public greeting = 'Hello';

  public greetingInfo = new GreetingInfo('Hello', 'Florian');

  ngDoCheck(): void {
    console.log('Change detection for AppComponent');
  }

  onClick(): void {
    // Start change detection
  }

  changeName(): void {
    this.name = 'Alex';
    this.greetingInfo.name = 'Alex';
    // this.greetingInfo = new GreetingInfo('Hello', 'Alex');
  }
}
