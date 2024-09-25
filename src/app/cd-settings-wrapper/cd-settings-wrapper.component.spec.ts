import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdSettingsWrapperComponent } from './cd-settings-wrapper.component';

describe('CdSettingsWrapperComponent', () => {
  let component: CdSettingsWrapperComponent;
  let fixture: ComponentFixture<CdSettingsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdSettingsWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdSettingsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
