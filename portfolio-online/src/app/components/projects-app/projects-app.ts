import { Component } from '@angular/core';

interface project {
  name: string;
  description: string;
  status: string;
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
      name: 'VetSite',
      description:
        'Plataforma web desenvolvida para catálogo e divulgação de produtos veterinários com integração direcionada para atendimento via WhatsApp. Projeto desenvolvido utilizando Django, React e TailwindCSS.',
      status: 'Projeto Pessoal',
    },
    {
      name: 'Portfolio',
      description:
        'Portfólio pessoal desenvolvido com Angular standalone, TailwindCSS e TypeScript, utilizando arquitetura componentizada, renderização reativa e hospedagem via GitHub Pages.',
      status: 'Ativo',
    },
  ];
}
