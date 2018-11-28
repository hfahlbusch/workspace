import { Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements DoCheck {
  @Input() greeting: string;
  @Input() name: string;
  @Input() id: string;

  ngDoCheck(): void {
    console.log('Change detection for GreeterComponent', this.id);
  }
}
