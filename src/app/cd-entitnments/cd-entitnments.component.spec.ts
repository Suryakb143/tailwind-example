import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdEntitnmentsComponent } from './cd-entitnments.component';

describe('CdEntitnmentsComponent', () => {
  let component: CdEntitnmentsComponent;
  let fixture: ComponentFixture<CdEntitnmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdEntitnmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdEntitnmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
