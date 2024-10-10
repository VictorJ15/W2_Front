import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AsignacionComponent } from "./components/asignaciones/asignacionComponent";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, AsignacionComponent, HttpClientModule]
})
export class AppComponent {
  title = 'Sistema de Transporte Trasmilenio';
  message = 'Bienvenido al Sistema de Trasnporte Transmilenio';
}
