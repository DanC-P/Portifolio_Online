import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarApp } from './sidebar-app';

describe('SidebarApp', () => {
  let component: SidebarApp;
  let fixture: ComponentFixture<SidebarApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarApp],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
