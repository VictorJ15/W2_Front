import { Component, OnInit } from '@angular/core';
import { RutaService } from '../../services/ruta.service';
import { Ruta } from '../../models/ruta';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {
  rutas: Ruta[] = [];
  diasSemana: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  selectedDias: any = {};
  selectedHorario: any = {};
  rutaForm: Ruta = { id: 0, codigo: '', estaciones: [], horario: [], buses: [] };
  editingRuta = false;
  newRuta = false;

  constructor(private rutaService: RutaService) {}

  ngOnInit(): void {
    this.getRutas();
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

  onSubmit(): void {
    const horario = this.diasSemana.map(dia => ({
      dia,
      horaInicio: this.selectedHorario[dia]?.horaInicio || '',
      horaFin: this.selectedHorario[dia]?.horaFin || ''
    })).filter(h => this.selectedDias[h.dia]);

    this.rutaForm.horario = horario;

    if (this.editingRuta) {
      this.rutaService.updateRuta(this.rutaForm.id, this.rutaForm).subscribe(() => this.getRutas());
    } else {
      this.rutaService.createRuta(this.rutaForm).subscribe(() => this.getRutas());
    }
    this.resetForm();
  }

  editRuta(ruta: Ruta): void {
    this.rutaForm = { ...ruta };
    this.editingRuta = true;
  }

  deleteRuta(ruta: Ruta): void {
    if (ruta.buses.length === 0) {
      this.rutaService.deleteRuta(ruta.id).subscribe(() => this.getRutas());
    }
  }

  cancel(): void {
    this.resetForm();
  }

  resetForm(): void {
    this.rutaForm = { id: 0, codigo: '', estaciones: [], horario: [], buses: [] };
    this.selectedDias = {};
    this.selectedHorario = {};
    this.editingRuta = false;
    this.newRuta = false;
  }
}
