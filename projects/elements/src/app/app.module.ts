import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, Injector, NgModule } from '@angular/core';

import { DynamicGreeterElement } from './greeter/dynamic-greeter/dynamic-greeter.element';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { StaticGreeterComponent } from './greeter/static-greeter/static-greeter.component';
import { GreeterModule } from './greeter/greeter.module';

@NgModule({
  imports: [
    BrowserModule,
    GreeterModule.forRoot({
      showTimestamp: false
    })
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) { }

  ngDoBootstrap(): void {
    const staticGreeterElement = createCustomElement(StaticGreeterComponent, {injector: this.injector});
    customElements.define('static-greeter-element', staticGreeterElement);

    const dynamicGreeterElement = createCustomElement(DynamicGreeterElement, {injector: this.injector});
    customElements.define('dynamic-greeter-element', dynamicGreeterElement);
  }
}
