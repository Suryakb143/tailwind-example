import { Component, OnInit, Input, Self, Optional, forwardRef } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent implements OnInit, ControlValueAccessor {
  @Input() disabled!: boolean ;
  @Input() label!: string;
  @Input() placeholder: string = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';

  value: any = '';

  // constructor(
  //   // Retrieve the dependency only from the local injector,
  //   // not from parent or ancestors.
  //   @Self()
  //   // We want to be able to use the component without a form,
  //   // so we mark the dependency as optional.
  //   @Optional()
  //   private ngControl: NgControl
  // ) {
  //   if (this.ngControl) {
  //     this.ngControl.valueAccessor = this;
  //   }
  // }

  ngOnInit() {}

  /**
   * Write form value to the DOM element (model => view)
   */
  writeValue(value: any): void {
    this.value = value;
  }

  /**
   * Write form disabled state to the DOM element (model => view)
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /**
   * Update form when DOM element value changes (view => model)
   */
  registerOnChange(fn: any): void {
    // Store the provided function as an internal method.
    this.onChange = fn;
  }

  /**
   * Update form when DOM element is blurred (view => model)
   */
  registerOnTouched(fn: any): void {
    // Store the provided function as an internal method.
    this.onTouched = fn;
  }

  onChange: (newValue: Object | string) => void = () => {}
  onTouched() {}
}