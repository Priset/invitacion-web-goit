import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  images = [
    '/assets/fondo-morado.jpg', // Reemplaza con la ruta de tus imágenes
    '/assets/fondo-samurai.jpg',
    '/assets/Senna-League-Of-Legends-Reveal.png'
  ];
  currentIndex = 0;

  goNext(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  goPrevious(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  setIndex(index: number): void {
    this.currentIndex = index;
  }
}
