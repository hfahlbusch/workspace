import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { AdvancedGreeterComponent } from './advanced-greeter/advanced-greeter.component';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    AdvancedGreeterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
