import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './static-greeter.component.html',
  styleUrls: ['./static-greeter.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class StaticGreeterComponent {
  @Input() name = 'world';
}
