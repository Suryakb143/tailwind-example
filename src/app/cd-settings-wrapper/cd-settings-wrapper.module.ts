import { NgModule } from '@angular/core';
import { CdSettingsWrapperComponent } from './cd-settings-wrapper.component';
import { Route, Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { CdProfileComponent } from '../cd-profile/cd-profile.component';
import { CdThemeComponent } from '../cd-theme/cd-theme.component';
import { CdEntitnmentsComponent } from '../cd-entitnments/cd-entitnments.component';
import { FormsModule } from '@angular/forms';
const routers:Route[] =[{
  path: "",
  component: CdSettingsWrapperComponent,
  children: [
      {path: "entitlement", component:CdEntitnmentsComponent},
      {path: "theme", component:CdThemeComponent},
      // {
      //     path: "home",
      //     loadChildren: () => HomeModule
      // },
      // {
      //     path: "about",
      //     loadChildren: () => AboutModule
      // }
  ]
}];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routers),
    MaterialModule
],
  declarations: [CdSettingsWrapperComponent,CdProfileComponent, CdEntitnmentsComponent,CdThemeComponent],
  bootstrap:    [  ],
  schemas: []
})
export class CdSettingsWrapperModule { }
