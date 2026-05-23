import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsApp } from './projects-app';

describe('ProjectsApp', () => {
  let component: ProjectsApp;
  let fixture: ComponentFixture<ProjectsApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsApp],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
