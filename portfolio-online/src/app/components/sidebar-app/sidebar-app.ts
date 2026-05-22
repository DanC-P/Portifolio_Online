import { Component } from '@angular/core';
import {
  LucideMoon,
  LucideSun,
  LucideHouse,
  LucideZap,
  LucideCode,
  LucideWrench,
} from '@lucide/angular';

@Component({
  selector: 'app-sidebar-app',
  imports: [LucideMoon, LucideSun, LucideHouse, LucideZap, LucideCode, LucideWrench],
  templateUrl: './sidebar-app.html',
  styleUrl: './sidebar-app.css',
})
export class SidebarApp {
  isDark = true;

  switchTheme() {
    this.isDark = !this.isDark;

    document.body.classList.toggle('light-theme', !this.isDark);
  }
}
