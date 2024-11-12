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
    '/assets/fondo-morado.jpg',
    '/assets/fondo-samurai.jpg',
    '/assets/Senna-League-Of-Legends-Reveal.png'
  ];
  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.goNext();
    }, 3000); // Cambia cada 3 segundos
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
