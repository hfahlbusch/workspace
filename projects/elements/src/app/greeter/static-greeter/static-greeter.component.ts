import { Component, Input } from '@angular/core';

@Component({
  selector: 'greeter-static',
  templateUrl: './static-greeter.component.html',
  styleUrls: ['./static-greeter.component.css']
})
export class StaticGreeterComponent {
  @Input() name = 'world';
}
