import { Component, signal } from '@angular/core';
import { SidebarApp } from './components/sidebar-app/sidebar-app';
import { HomePage } from './pages/home-page/home-page';
import { ParticlesBackground } from './components/particles-background/particles-background';

@Component({
  selector: 'app-root',
  imports: [SidebarApp, HomePage, ParticlesBackground],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio-online');
}
