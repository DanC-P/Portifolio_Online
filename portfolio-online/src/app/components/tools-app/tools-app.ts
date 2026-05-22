import { Component } from '@angular/core';

@Component({
  selector: 'app-tools-app',
  imports: [],
  templateUrl: './tools-app.html',
  styleUrl: './tools-app.css',
})
export class ToolsApp {
  tools = [
    'Angular',
    'Django',
    'React',
    'Docker',
    'Git & Github',
    'Tailwind CSS',
    'Linux',
    'Data Studio',
  ];
}
