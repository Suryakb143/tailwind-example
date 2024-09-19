import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdProfileComponent } from './cd-profile.component';

describe('CdProfileComponent', () => {
  let component: CdProfileComponent;
  let fixture: ComponentFixture<CdProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
