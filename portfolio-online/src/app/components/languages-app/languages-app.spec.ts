import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesApp } from './languages-app';

describe('LanguagesApp', () => {
  let component: LanguagesApp;
  let fixture: ComponentFixture<LanguagesApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesApp],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguagesApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
