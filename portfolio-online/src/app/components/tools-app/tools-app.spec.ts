import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsApp } from './tools-app';

describe('ToolsApp', () => {
  let component: ToolsApp;
  let fixture: ComponentFixture<ToolsApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolsApp],
    }).compileComponents();

    fixture = TestBed.createComponent(ToolsApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
