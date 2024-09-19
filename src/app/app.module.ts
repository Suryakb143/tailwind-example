import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppComponent } from './app.component';
import { CustomCoponentsModule } from './custom-components/custom-components.module';
import { CdProfileComponent } from './cd-profile/cd-profile.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
@NgModule({
  imports:      [ BrowserAnimationsModule,BrowserModule, FormsModule, ReactiveFormsModule,CustomCoponentsModule,
    MaterialModule],
  declarations: [ AppComponent, CdProfileComponent ],
  bootstrap:    [ AppComponent ],
  schemas: []
})
export class AppModule { }
