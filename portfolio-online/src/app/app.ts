import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarApp } from './components/sidebar-app/sidebar-app';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarApp],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio-online');
}
