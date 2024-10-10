import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConductorService } from './conductor.service'; // Servicio creado para manejar los conductores

@Component({
  selector: 'app-conductor-form',
  templateUrl: './conductor-form.component.html',
})
export class ConductorFormComponent implements OnInit {
  conductor: any = {};
  esEditar: boolean = false;

  constructor(
    private conductorService: ConductorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const conductorId = this.route.snapshot.paramMap.get('id');
    if (conductorId) {
      this.esEditar = true;
      this.conductorService.obtenerConductor(Number(conductorId)).subscribe((data) => {
        this.conductor = data;
      });
    }
  }

  guardarConductor(): void {
    if (this.esEditar) {
      this.conductorService.actualizarConductor(this.conductor).subscribe(() => {
        this.router.navigate(['/conductores']);
      });
    } else {
      this.conductorService.crearConductor(this.conductor).subscribe(() => {
        this.router.navigate(['/conductores']);
      });
    }
  }
}
