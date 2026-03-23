import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  contador: number = 0;

aumentar() {
  this.contador++;
}

diminuir() {
  this.contador--;
}
  protected readonly title = signal('atividade-contador');
  
}
