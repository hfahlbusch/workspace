import { Component, DoCheck } from '@angular/core';
import { GreetingInfo } from './models';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  public name = 'Florian';
  public greeting = 'Hello';

  constructor(private dataService: DataService) { }

  ngDoCheck(): void {
    console.log('Change detection for AppComponent');
  }

  onClick(): void {
    // Start change detection
  }

  changeName(): void {
    this.name = 'Alex';
    // this.greetingInfo.name = 'Alex';
    this.dataService.changeGreetingInfo({greeting: 'Hello', name: 'Alex'});
  }
}
