import { Component } from '@angular/core';

interface project {
  name: string;
  description: string;
}

@Component({
  selector: 'app-projects-app',
  imports: [],
  templateUrl: './projects-app.html',
  styleUrl: './projects-app.css',
})
export class ProjectsApp {
  listOfProjects: project[] = [
    {
      name: 'VetSite - WebSite Catalogo de Vendas Online Via Whats',
      description: 'teste',
    },
    {
      name: 'Portfolio Online Hospedado no Github',
      description: 'teste',
    },
  ];
}
