import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit, OnDestroy {
  hours: string = '00';
  minutes: string = '00';
  days: number = 0;
  private targetDate = new Date('2025-02-01T16:30:00'); // Fecha objetivo
  private intervalId: any;

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startCountdown(): void {
    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = this.targetDate.getTime() - now;

      if (timeDifference <= 0) {
        this.hours = '00';
        this.minutes = '00';
        this.days = 0;
        clearInterval(this.intervalId);
      } else {
        this.updateCountdown(timeDifference);
      }
    }, 1000);
  }

  updateCountdown(timeDifference: number): void {
    const totalMinutes = Math.floor(timeDifference / (1000 * 60));
    const hours = Math.floor((totalMinutes % 1440) / 60); // 1440 minutes in a day
    const minutes = totalMinutes % 60;
    const days = Math.floor(totalMinutes / 1440);

    this.hours = hours < 10 ? '0' + hours : hours.toString();
    this.minutes = minutes < 10 ? '0' + minutes : minutes.toString();
    this.days = days;
  }
}
