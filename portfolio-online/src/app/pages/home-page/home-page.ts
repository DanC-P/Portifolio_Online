import { Component } from '@angular/core';
import { SidebarApp } from '../../components/sidebar-app/sidebar-app';
import { HeaderApp } from '../../components/header-app/header-app';
import { SkillsApp } from '../../components/skills-app/skills-app';
import { LanguagesApp } from '../../components/languages-app/languages-app';
import { ToolsApp } from '../../components/tools-app/tools-app';
import { ProjectsApp } from '../../components/projects-app/projects-app';
import { FooterApp } from '../../components/footer-app/footer-app';

@Component({
  selector: 'app-home-page',
  imports: [HeaderApp, SkillsApp, LanguagesApp, ToolsApp, ProjectsApp, FooterApp],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
