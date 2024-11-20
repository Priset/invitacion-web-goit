import { Component } from '@angular/core';
import confetti from 'canvas-confetti';
import {SongRecommendationComponent} from '../song-recommendation/song-recommendation.component';

@Component({
  selector: 'app-event-info',
  standalone: true,
  imports: [
    SongRecommendationComponent
  ],
  templateUrl: './event-info.component.html',
  styleUrl: './event-info.component.css'
})
export class EventInfoComponent {

  triggerConfetti(event: MouseEvent): void {
    const { clientX, clientY } = event;
    confetti({
      particleCount: 100,
      spread: 70,
      origin: {
        x: clientX / window.innerWidth,
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

  openSongPopup(): void {
    document.getElementById('songPopup')?.classList.add('visible');
  }
}
