import { Component } from '@angular/core';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-event-info',
  standalone: true,
  imports: [],
  templateUrl: './event-info.component.html',
  styleUrl: './event-info.component.css'
})
export class EventInfoComponent {

  triggerConfetti(event: MouseEvent): void {
    const { clientX, clientY } = event; // Obtiene la posición del clic
    confetti({
      particleCount: 100,
      spread: 70,
      origin: {
        x: clientX / window.innerWidth,  // Convierte la posición a coordenadas relativas
        y: clientY / window.innerHeight
      }
    });
  }

  redirectToSite(): void {
    window.open('https://example.com', '_blank');
  }

  redirectToMaps(): void {
    window.open('https://maps.google.com', '_blank');
  }
}
