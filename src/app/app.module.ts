import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomCoponentsModule } from './custom-components/custom-components.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,CustomCoponentsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  schemas: []
})
export class AppModule { }
