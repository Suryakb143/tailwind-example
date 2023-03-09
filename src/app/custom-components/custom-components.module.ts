import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { CustomInputComponent } from './custom-input/custom-input.component';


@NgModule({

  declarations: [  CustomInputComponent ],
  exports:    [  CustomInputComponent],
  entryComponents: [CustomInputComponent]
})
export class CustomCoponentsModule { }
