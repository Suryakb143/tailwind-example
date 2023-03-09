import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customInputForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.customInputForm = this.formBuilder.group(
      {
        email: [''],
        fullname: ['Bill Gates'],
        phone: [{
          value: '0497 88 88 88',
          disabled: true
        }]
      },
      // Uncomment to test `registerOnTouched`
      // { validator: { updateOn: 'blur' } }
    );
  }
}
