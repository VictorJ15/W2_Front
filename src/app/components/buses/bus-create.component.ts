import { FormsModule } from '@angular/forms';
import { Bus } from './../../models/bus';
import { BusService } from './../../services/bus.service';
// src/app/buses/bus-create/bus-create.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-bus-create',
    templateUrl: './bus-create.component.html',
    standalone: true,
    imports: [FormsModule]
})
export class BusCreateComponent {
    bus: Bus = {
      id: 0,
      placa: '',
      modelo: '',
      conductoresAsignados: [],
      rutasAsignadas: [],
      conductores: []
    };

    constructor(private busService: BusService, private router: Router) { }

    createBus(): void {
        this.busService.createBus(this.bus).subscribe(() => {
            this.router.navigate(['/buses']);
        });
    }
}
