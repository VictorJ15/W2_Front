import { Component, OnInit } from '@angular/core';
import { BusService } from '../../services/bus.service';
import { RutaService } from '../../services/ruta.service';
import { Bus } from '../../models/bus';
import { Ruta } from '../../models/ruta';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent implements OnInit {
  buses: Bus[] = [];
  rutas: Ruta[] = [];
  diasSemana: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  busForm: Bus = { id: 0, placa: '', modelo: '', rutas: [], conductores: [] };
  selectedRuta: Ruta | null = null;
  editingBus = false;
  newBus = false;

  constructor(private busService: BusService, private rutaService: RutaService) {}

  ngOnInit(): void {
    this.getBuses();
    this.getRutas();
  }

  getBuses(): void {
    this.busService.getAllBuses().subscribe(
      data => {
        this.buses = data;
      },
      error => {
        console.error('Error al obtener buses', error);
      }
    );
  }

  getRutas(): void {
    this.rutaService.getAllRutas().subscribe(
      data => {
        this.rutas = data;
      },
      error => {
        console.error('Error al obtener rutas', error);
      }
    );
  }

  onRutaSelect(): void {
    if (this.selectedRuta) {
      this.selectedRuta.dias = {};
    }
  }

  addRuta(): void {
    if (this.selectedRuta) {
      this.busForm.rutas.push({ ...this.selectedRuta });
      this.selectedRuta = null;
    }
  }

  onSubmit(): void {
    if (this.editingBus) {
      this.busService.updateBus(this.busForm.id, this.busForm).subscribe(() => this.getBuses());
    } else {
      this.busService.createBus(this.busForm).subscribe(() => this.getBuses());
    }
    this.resetForm();
  }

  editBus(bus: Bus): void {
    this.busForm = { ...bus };
    this.editingBus = true;
  }

  deleteBus(bus: Bus): void {
    if (bus.conductores.length === 0) {
      this.busService.deleteBus(bus.id).subscribe(() => this.getBuses());
    }
  }

  cancel(): void {
    this.resetForm();
  }

  resetForm(): void {
    this.busForm = { id: 0, placa: '', modelo: '', rutas: [], conductores: [] };
    this.selectedRuta = null;
    this.editingBus = false;
    this.newBus = false;
  }
}
