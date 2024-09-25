import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdThemeComponent } from './cd-theme.component';

describe('CdThemeComponent', () => {
  let component: CdThemeComponent;
  let fixture: ComponentFixture<CdThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
