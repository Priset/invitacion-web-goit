import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  redirectToRegister(): void {
    window.open('https://www.youtube.com/watch?v=qbrSuaxnMS0', '_blank'); // Reemplaza con tu URL de formulario de registro
  }
}
