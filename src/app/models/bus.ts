export interface Bus {
    id: number;
    placa: string;
    modelo: string;
    conductores: number[];  // IDs de conductores
    conductoresAsignados: number[]; // IDs de asignaciones
    rutasAsignadas: number[]; // IDs de rutas
  }
  