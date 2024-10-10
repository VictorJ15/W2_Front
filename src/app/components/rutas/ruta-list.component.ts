
import { Component, OnInit } from '@angular/core';
import { RutaService } from './../../services/ruta.service';
import { Ruta } from './../../models/ruta';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-ruta-list',
    templateUrl: './ruta-list.component.html',
    standalone: true,
    imports: [CommonModule]
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
