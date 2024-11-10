import { RutasAsignacionesComponent } from './components/rutas/rutas-asignaciones/rutas-asignaciones.component';
import { BusAsignacionesComponent } from './components/buses/bus-asignaciones/bus-asignaciones.component';
import { Routes } from '@angular/router';
import { BusListComponent } from './components/buses/bus-list.component';
import { ConductorCreateComponent } from './components/conductores/conductor-create.component';
import { ConductorListComponent } from './components/conductores/conductor-list.component';
import { HorarioCreateComponent } from './components/horarios/horario-create.component';
import { HorarioListComponent } from './components/horarios/horario-list.component';
import { RutaCreateComponent } from './components/rutas/ruta-create.component';
import { RutaListComponent } from './components/rutas/ruta-list.component';
import { EditConductorComponent } from './components/conductores/conductor-edit/conductor-edit.component';
import { ConductorAsignacionesComponent } from './components/conductores/conductor-asignaciones/conductor-asignaciones.component';
import { BusEditComponent } from './components/buses/bus-edit/bus-edit.component';
import { RutasEditComponent } from './components/rutas/rutas-edit/rutas-edit.component';
import { HorariosEditComponent } from './components/horarios/horarios-edit/horarios-edit.component';
import { HorariosAsignacionesComponent } from './components/horarios/horarios-asignaciones/horarios-asignaciones.component';
import { BusCreateComponent } from './components/buses/bus-create/bus-create.component';
import { AsignacionesListComponent } from './components/asignaciones/asignaciones-list/asignaciones-list.component';
import { AsignacionesCreateComponent } from './components/asignaciones/asignaciones-create/asignaciones-create.component';
import { AsignacionesEditComponent } from './components/asignaciones/asignaciones-edit/asignaciones-edit.component';

export const routes: Routes = [
    { path: 'buses', component: BusListComponent },
    { path: 'buses/create', component: BusCreateComponent },
    { path: 'buses/edit/:id', component: BusEditComponent},
    { path: 'buses/asignaciones/:id', component: BusAsignacionesComponent },
    { path: 'conductores', component: ConductorListComponent },
    { path: 'conductores/create', component: ConductorCreateComponent },
    { path: 'conductores/edit/:id', component: EditConductorComponent },
    { path: 'conductores/asignaciones/:id', component: ConductorAsignacionesComponent },
    { path: 'rutas', component: RutaListComponent },
    { path: 'rutas/create', component: RutaCreateComponent },
    { path: 'rutas/edit/:id', component: RutasEditComponent },
    { path: 'rutas/asignaciones/:id', component:RutasAsignacionesComponent },
    { path: 'horarios', component: HorarioListComponent },
    { path: 'horarios/create', component: HorarioCreateComponent },
    { path: 'horarios/edit/:id', component: HorariosEditComponent },
    { path: 'horarios/asignaciones/:id', component:HorariosAsignacionesComponent },
    { path: 'asignaciones', component: AsignacionesListComponent},
    { path: 'asignaciones/create', component: AsignacionesCreateComponent},
    { path: 'asignaciones/edit/:id', component: AsignacionesEditComponent},
    { path: '', redirectTo: '/asignaciones', pathMatch: 'full' }, // Redirección por defecto
    { path: '**', redirectTo: '/asignaciones' }, // Manejo de rutas no encontradas];
]