import { ChangeDetectionStrategy, Component, DoCheck, Input } from '@angular/core';
import { GreetingInfo } from '../models';

@Component({
  selector: 'app-advanced-greeter',
  templateUrl: './advanced-greeter.component.html',
  styleUrls: ['./advanced-greeter.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedGreeterComponent implements DoCheck {
  @Input() greetingInfo: GreetingInfo;

  ngDoCheck(): void {
    console.log('Change detection for AdvancedGreeterComponent');
  }
}
