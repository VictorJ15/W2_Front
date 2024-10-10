import { Conductor } from './../../models/conductor';
import { ConductorService } from './../../services/conductor.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-conductor-list',
    templateUrl: './conductor-list.component.html',
    styleUrls: ['./conductor-list.component.css']
})
export class ConductorListComponent implements OnInit {
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
