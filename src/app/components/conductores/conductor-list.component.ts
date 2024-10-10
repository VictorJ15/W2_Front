import { Conductor } from './../../models/conductor';
import { ConductorService } from './../../services/conductor.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-conductor-list',
    templateUrl: './conductor-list.component.html',
 
})
export class ConductorListComponent implements OnInit {
eliminarConductor(arg0: any,$event: MouseEvent) {
throw new Error('Method not implemented.');
}
verAsignaciones(arg0: any) {
throw new Error('Method not implemented.');
}
crearConductor() {
throw new Error('Method not implemented.');
}
editarConductor(arg0: any,$event: MouseEvent) {
throw new Error('Method not implemented.');
}
    conductores: Conductor[] = [];

    constructor(private conductorService: ConductorService) { }

    ngOnInit(): void {
        this.loadConductores();
    }

    loadConductores(): void {
        this.conductorService.getAllConductores().subscribe((conductores: Conductor[]) => {
            this.conductores = conductores;
        });
    }

    deleteConductor(id: number): void {
        this.conductorService.deleteConductor(id).subscribe(() => {
            this.loadConductores();
        });
    }
}
