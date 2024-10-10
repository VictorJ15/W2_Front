import { FormsModule } from '@angular/forms';
import { Bus } from './../../models/bus';
import { BusService } from './../../services/bus.service';
// src/app/buses/bus-list/bus-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-bus-list',
    templateUrl: './bus-list.component.html',
    standalone: true,
    imports: [FormsModule, CommonModule]
})
export class BusListComponent implements OnInit {
    buses: Bus[] = [];

    constructor(private busService: BusService) { }

    ngOnInit(): void {
        this.loadBuses();
    }

    loadBuses(): void {
        this.busService.getAllBuses().subscribe((buses: Bus[]) => {
            this.buses = buses;
        });
    }

    deleteBus(id: number): void {
        this.busService.deleteBus(id).subscribe(() => {
            this.loadBuses();
        });
    }
}
