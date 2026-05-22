import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarApp } from './components/sidebar-app/sidebar-app';
import { HeaderApp } from './components/header-app/header-app';
import { SkillsApp } from './components/skills-app/skills-app';
import { LanguagesApp } from './components/languages-app/languages-app';

@Component({
  selector: 'app-root',
  imports: [SidebarApp, HeaderApp, SkillsApp, LanguagesApp],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio-online');
}
