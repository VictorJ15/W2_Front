import { Conductor } from './../../models/conductor';
import { ConductorService } from './../../services/conductor.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-conductor-create',
    templateUrl: './conductor-create.component.html',
    styleUrls: ['./conductor-create.component.css']
})
export class ConductorCreateComponent {
    conductor: Conductor = {
        id: 0,
        nombre: '',
        cedula: '',
        telefono: '',
        direccion: '',
        busesAsignados: [],
    };

    constructor(private conductorService: ConductorService, private router: Router) { }

    createConductor(): void {
        this.conductorService.createConductor(this.conductor).subscribe(() => {
            this.router.navigate(['/conductores']);
        });
    }
}
