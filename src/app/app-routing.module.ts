import { AsignacionComponent } from './components/asignaciones/asignacionComponent';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { BusListComponent } from './components/buses/bus-list.component';
import { BusCreateComponent } from './components/buses/bus-create.component';

import { ConductorListComponent } from './components/conductores/conductor-list.component';
import { ConductorCreateComponent } from './components/conductores/conductor-create.component';

import { RutaListComponent } from './components/rutas/ruta-list.component';
import { RutaCreateComponent } from './components/rutas/ruta-create.component';

import { HorarioListComponent } from './components/horarios/horario-list.component';
import { HorarioCreateComponent } from './components/horarios/horario-create.component';

const routes: Routes = [
    { path: 'asignaciones', component: AsignacionComponent },
    

    { path: 'buses', component: BusListComponent },
    { path: 'buses/create', component: BusCreateComponent },

    { path: 'conductores', component: ConductorListComponent },
    { path: 'conductores/create', component: ConductorCreateComponent },

    { path: 'rutas', component: RutaListComponent },
    { path: 'rutas/create', component: RutaCreateComponent },

    { path: 'horarios', component: HorarioListComponent },
    { path: 'horarios/create', component: HorarioCreateComponent },

    { path: '', redirectTo: '/asignaciones', pathMatch: 'full' } // Redirección a la lista de asignaciones por defecto
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
