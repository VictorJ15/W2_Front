import { HorarioService } from './../../services/horario.service';
import { Horario } from './../../models/horario';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-horario-list',
    templateUrl: './horario-list.component.html',
    standalone: true,
    imports: [CommonModule]
})
export class HorarioListComponent implements OnInit {
    horarios: Horario[] = [];

    constructor(private horarioService: HorarioService) { }

    ngOnInit(): void {
        this.loadHorarios();
    }

    loadHorarios(): void {
        this.horarioService.getAllHorarios().subscribe((horarios: Horario[]) => {
            this.horarios = horarios;
        });
    }

    deleteHorario(id: number): void {
        this.horarioService.deleteHorario(id).subscribe(() => {
            this.loadHorarios();
        });
    }
}
