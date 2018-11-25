import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { ReactiveFormsModule } from '@angular/forms';
import { PushModule } from 'push';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    PushModule
  ],
  providers: [],
  entryComponents: [
    AppComponent
  ]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) { }

  ngDoBootstrap(): void {
    const element = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('greeter-element', element);
  }
}
