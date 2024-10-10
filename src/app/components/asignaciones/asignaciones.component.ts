import { Component, OnInit } from '@angular/core';
import { AsignacionService } from '../../services/asignacion.service';
import { Asignacion } from '../../models/asignacion';

@Component({
  selector: 'app-asignaciones',
  templateUrl: './asignaciones.component.html',
  styleUrls: ['./asignaciones.component.css']
})
export class AsignacionesComponent implements OnInit {
  asignaciones: Asignacion[] = [];

  constructor(private asignacionService: AsignacionService) { }

  ngOnInit(): void {
    this.getAsignaciones();
  }

  getAsignaciones(): void {
    this.asignacionService.getAllAsignaciones().subscribe(
      data => {
        this.asignaciones = data;
      },
      error => {
        console.error('Error al obtener asignaciones', error);
      }
    );
  }
}
