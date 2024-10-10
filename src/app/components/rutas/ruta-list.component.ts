// src/app/rutas/ruta-list/ruta-list.component.ts
import { Component, OnInit } from '@angular/core';
import { RutaService } from './../../services/ruta.service';
import { Ruta } from './../../models/ruta';

@Component({
    selector: 'app-ruta-list',
    templateUrl: './ruta-list.component.html',
    styleUrls: ['./ruta-list.component.css']
})
export class RutaListComponent implements OnInit {
    rutas: Ruta[] = [];

    constructor(private rutaService: RutaService) { }

    ngOnInit(): void {
        this.loadRutas();
    }

    loadRutas(): void {
        this.rutaService.getAllRutas().subscribe((rutas: Ruta[]) => {
            this.rutas = rutas;
        });
    }

    deleteRuta(id: number): void {
        this.rutaService.deleteRuta(id).subscribe(() => {
            this.loadRutas();
        });
    }
}