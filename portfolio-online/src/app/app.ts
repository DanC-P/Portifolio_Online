import { Component, signal } from '@angular/core';
import { SidebarApp } from './components/sidebar-app/sidebar-app';
import { HomePage } from './pages/home-page/home-page';

@Component({
  selector: 'app-root',
  imports: [SidebarApp, HomePage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio-online');
}
