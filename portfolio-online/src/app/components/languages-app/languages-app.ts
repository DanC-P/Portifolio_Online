import { Component } from '@angular/core';

@Component({
  selector: 'app-languages-app',
  imports: [],
  templateUrl: './languages-app.html',
  styleUrl: './languages-app.css',
})
export class LanguagesApp {
  languages = ['Python', 'Java', 'TypeScript', 'JavaScript', 'C'];
}
