import { RutaService } from './../../services/ruta.service';
import { Ruta } from './../../models/ruta';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-ruta-create',
    templateUrl: './ruta-create.component.html',
   
})
export class RutaCreateComponent {
    ruta: Ruta = {
        id: 0,
        codigo: '',
        estaciones: [],
        busesAsignados: [],
        horarios: []
    };

    constructor(private rutaService: RutaService, private router: Router) { }

    createRuta(): void {
        this.rutaService.createRuta(this.ruta).subscribe(() => {
            this.router.navigate(['/rutas']);
        });
    }


estacion: string = '';
busId: number | null = null;
horarioId: number | null = null;

addEstacion(): void {
    if (this.estacion) {
        this.ruta.estaciones.push(this.estacion);
        this.estacion = '';
    }
}

removeEstacion(estacion: string): void {
    this.ruta.estaciones = this.ruta.estaciones.filter((e: string) => e !== estacion);
}

addBusId(): void {
    if (this.busId !== null) {
        this.ruta.busesAsignados.push(this.busId);
        this.busId = null;
    }
}

removeBusId(id: number): void {
    this.ruta.busesAsignados = this.ruta.busesAsignados.filter((b: number) => b !== id);
}

addHorarioId(): void {
    if (this.horarioId !== null) {
        this.ruta.horarios.push(this.horarioId);
        this.horarioId = null;
    }
}

removeHorarioId(id: number): void {
    this.ruta.horarios = this.ruta.horarios.filter((h: number) => h !== id);
  }
}