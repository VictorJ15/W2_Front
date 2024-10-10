export interface Conductor {
    id: number;
    nombre: string;
    cedula: string;
    telefono: string;
    direccion: string;
    busesAsignados: number[];  // IDs de buses
  }
  