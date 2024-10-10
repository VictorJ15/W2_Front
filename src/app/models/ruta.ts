export interface Ruta {
    id: number;
    codigo: string;
    estaciones: string[];
    busesAsignados: number[]; // IDs de buses
    horarios: number[]; // IDs de horarios
  }
  