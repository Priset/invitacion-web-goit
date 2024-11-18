import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {
  images = [
    '/assets/almuerzo-fin-2023-1.jpg',
    '/assets/almuerzo-fin-2023-2.jpg',
    '/assets/cena-fin-2022-1.jpg',
    '/assets/cena-fin-2022-2.jpg',
    '/assets/cena-fin-2022-3.jpg',
    '/assets/cena-trabajador-santa-2024.jpg',
    '/assets/compadres-2023.jpg',
    '/assets/cumple-eli-2023.jpg',
    '/assets/dia-trabajador-2023.jpg',
    '/assets/dia-trabajador-lpz-2024.jpg',
    '/assets/evento-2023.jpg',
    '/assets/navidad-2023-1.jpg',
    '/assets/navidad-2023-2.jpg'
  ];
  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.goNext();
    }, 5000); // Cambia cada 3 segundos
  }

  goNext(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  goPrevious(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  setIndex(index: number): void {
    this.currentIndex = index;
    clearInterval(this.intervalId); // Detiene el cambio automático al seleccionar manualmente
    this.startAutoSlide(); // Reinicia el cambio automático
  }
}
