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

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,CustomCoponentsModule,
     MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule ],
  declarations: [ AppComponent, CdProfileComponent ],
  bootstrap:    [ AppComponent ],
  schemas: []
})
export class AppModule { }
