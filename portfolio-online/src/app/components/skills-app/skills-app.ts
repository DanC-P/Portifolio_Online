import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-app',
  imports: [],
  templateUrl: './skills-app.html',
  styleUrl: './skills-app.css',
})
export class SkillsApp {
  skills = [
    'Arquitetura Web',
    'APIs REST',
    'Programação Orientada a Objetos',
    'Responsividade',
    'Integração Frontend/Backend',
    'Business Intelligence',
  ];
}
