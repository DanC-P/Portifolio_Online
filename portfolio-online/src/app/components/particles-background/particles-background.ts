import { Component } from '@angular/core';

@Component({
  selector: 'app-particles-background',
  imports: [],
  templateUrl: './particles-background.html',
  styleUrl: './particles-background.css',
})
export class ParticlesBackground {
  particles = Array.from({ length: 20 }, () => ({
    left: Math.random() * 100,
    duration: 8 + Math.random() * 12,
    delay: Math.random() * 10,
    size: 2 + Math.random() * 3,
  }));
}
