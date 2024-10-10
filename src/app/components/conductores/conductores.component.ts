import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConductorService } from './services/conductor.service'; // Servicio creado para manejar los conductores

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.component.html',
})
export class ConductoresComponent implements OnInit {
  conductores: any[] = [];

  constructor(private conductorService: ConductorService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerConductores();
  }

  obtenerConductores(): void {
    this.conductorService.getConductores().subscribe((data) => {
      this.conductores = data;
    });
  }

  crearConductor(): void {
    this.router.navigate(['/conductores/nuevo']);
  }

  verAsignaciones(conductorId: number): void {
    this.router.navigate([`/conductores/${conductorId}/asignaciones`]);
  }

  editarConductor(conductorId: number, event: Event): void {
    event.stopPropagation();
    this.router.navigate([`/conductores/editar/${conductorId}`]);
  }

  eliminarConductor(conductorId: number, event: Event): void {
    event.stopPropagation();
    this.conductorService.eliminarConductor(conductorId).subscribe(() => {
      this.obtenerConductores();
    });
  }
}
