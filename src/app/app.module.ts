// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Para usar ngModel
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// Componentes de Asignaciones
import { AsignacionComponent } from './components/asignaciones/asignacionComponent';

// Componentes de Buses
import { BusListComponent } from './components/buses/bus-list.component';
import { BusCreateComponent } from './components/buses/bus-create.component';

// Componentes de Conductores
import { ConductorListComponent } from './components/conductores/conductor-list.component';
import { ConductorCreateComponent } from './components/conductores/conductor-create.component';

// Componentes de Rutas
import { RutaListComponent } from './components/rutas/ruta-list.component';
import { RutaCreateComponent } from './components/rutas/ruta-create.component';

// Componentes de Horarios
import { HorarioListComponent } from './components/horarios/horario-list.component';
import { HorarioCreateComponent } from './components/horarios/horario-create.component';

@NgModule({
  declarations: [
    AppComponent,
    // Componentes de Asignaciones
    AsignacionComponent,
    
    // Componentes de Buses
    BusListComponent,
    BusCreateComponent,

    // Componentes de Conductores
    ConductorListComponent,
    ConductorCreateComponent,

    // Componentes de Rutas
    RutaListComponent,
    RutaCreateComponent,

    // Componentes de Horarios
    HorarioListComponent,
    HorarioCreateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Para realizar solicitudes HTTP
    FormsModule,      // Para usar ngModel
    AppRoutingModule, // Módulo de enrutamiento
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }