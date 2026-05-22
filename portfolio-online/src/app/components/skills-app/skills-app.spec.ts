import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsApp } from './skills-app';

describe('SkillsApp', () => {
  let component: SkillsApp;
  let fixture: ComponentFixture<SkillsApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsApp],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
