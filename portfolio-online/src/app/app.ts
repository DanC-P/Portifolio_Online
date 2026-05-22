import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarApp } from './components/sidebar-app/sidebar-app';
import { HeaderApp } from './components/header-app/header-app';

@Component({
  selector: 'app-root',
  imports: [SidebarApp, HeaderApp],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio-online');
}
