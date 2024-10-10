import { Asignacion } from './../../models/asignacion';
import { AsignacionService } from './../../services/asignacion.service';
// src/app/asignaciones/asignacion-list/asignacion-list.component.ts
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-asignacion-list',
    templateUrl: './asignacion-list.component.html',
    styleUrls: ['./asignacion-list.component.css']
})
export class AsignacionListComponent implements OnInit {
    asignaciones: Asignacion[] = [];

    constructor(private asignacionService: AsignacionService) { }

    ngOnInit(): void {
        this.loadAsignaciones();
    }

    loadAsignaciones(): void {
        this.asignacionService.getAllAsignaciones().subscribe((asignaciones: Asignacion[]) => {
            this.asignaciones = asignaciones;
        });
    }

    deleteAsignacion(id: number): void {
        this.asignacionService.deleteAsignacion(id).subscribe(() => {
            this.loadAsignaciones();
        });
    }
}
