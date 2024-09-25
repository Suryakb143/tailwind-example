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
import { Routes, RouterModule } from '@angular/router';
import { CdSettingsWrapperModule } from './cd-settings-wrapper/cd-settings-wrapper.module';
const routes: Routes = [
  {path: "", redirectTo:'settings',pathMatch:'full'},
  { path: 'settings', loadChildren: () => import('./cd-settings-wrapper/cd-settings-wrapper.module').then((mod) => CdSettingsWrapperModule) }
];
@NgModule({
  imports:      [ BrowserAnimationsModule,BrowserModule, FormsModule, ReactiveFormsModule,CustomCoponentsModule,
    MaterialModule,RouterModule.forRoot(routes)],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  schemas: []
})
export class AppModule { }
