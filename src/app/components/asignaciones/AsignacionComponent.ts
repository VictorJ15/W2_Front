
import { Component, OnInit } from '@angular/core';
import { AsignacionService } from '../../services/asignacion.service';
import { Asignacion } from '../../models/asignacion';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-asignacion',
  templateUrl: './asignacion.component.html',

})
export class AsignacionComponent implements OnInit {
  nuevoAsignacion: Asignacion = { id: 0, conductorId: 0, busId: 0, rutaId: 0, dias: [] };
  asignaciones$: Observable<Asignacion[]> | undefined;

  constructor(private asignacionService: AsignacionService) {}

  ngOnInit(): void {
    this.obtenerAsignaciones(); // Cargar las asignaciones al inicializar el componente
  }

  // Método para agregar una nueva asignación
  agregarAsignacion() {
    this.asignacionService.createAsignacion(this.nuevoAsignacion).subscribe({
      next: (asignacion) => {
        console.log('Asignación creada:', asignacion);
        this.obtenerAsignaciones(); // Actualizar la lista después de agregar
        this.nuevoAsignacion = { id: 0, conductorId: 0, busId: 0, rutaId: 0, dias: [] }; // Reiniciar formulario
      },
      error: (err) => {
        console.error('Error al crear asignación', err);
      }
    });
  }

  // Método para obtener todas las asignaciones
  obtenerAsignaciones() {
    this.asignaciones$ = this.asignacionService.getAllAsignaciones();
  }
}
