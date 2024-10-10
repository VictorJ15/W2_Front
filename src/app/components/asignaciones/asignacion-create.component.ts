import { Asignacion } from './../../models/asignacion';
import { AsignacionService } from './../../services/asignacion.service';
// src/app/asignaciones/asignacion-create/asignacion-create.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
    selector: 'app-asignacion-create',
    templateUrl: './asignacion-create.component.html',
    styleUrls: ['./asignacion-create.component.css']
})
export class AsignacionCreateComponent {
    asignacion: Asignacion = {
        id: 0,
        conductorId: { id: 0, nombre: '' },
        ruta: { id: 0, codigo: '' },
        bus: { id: 0, placa: '' },
        dias: []
    };

    constructor(private asignacionService: AsignacionService, private router: Router) { }

    createAsignacion(): void {
        this.asignacionService.createAsignacion(this.asignacion).subscribe(() => {
            this.router.navigate(['/asignaciones']);
        });
    }
}
