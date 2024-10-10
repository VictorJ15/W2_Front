import { HorarioService } from './../../services/horario.service';
import { Horario } from './../../models/horario';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-horario-create',
    templateUrl: './horario-create.component.html',
   
})
export class HorarioCreateComponent {
    horario: Horario = {
        id: 0,
        rutaId: 0, // ID de la ruta
        diasDeLaSemana: [], // Días de la semana
        horaInicio: '',
        horaFin: ''
    };

    dia: string = ''; // Para agregar días de la semana

    constructor(private horarioService: HorarioService, private router: Router) { }

    createHorario(): void {
        this.horarioService.createHorario(this.horario).subscribe(() => {
            this.router.navigate(['/horarios']);
        });
    }

    addDia(): void {
        if (this.dia) {
            this.horario.diasDeLaSemana.push(this.dia);
            this.dia = '';
        }
    }

    removeDia(dia: string): void {
        this.horario.diasDeLaSemana = this.horario.diasDeLaSemana.filter(d => d !== dia);
    }
}
