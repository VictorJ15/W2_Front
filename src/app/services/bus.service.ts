import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bus } from '../models/bus';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  private apiUrl = 'http://localhost:8080/api/buses';  // URL del backend (ajustar si es necesario)

  constructor(private http: HttpClient) { }

  // Obtener todos los buses
  getAllBuses(): Observable<Bus[]> {
    return this.http.get<Bus[]>(this.apiUrl);
  }

  // Obtener un bus por su ID
  getBusById(id: number): Observable<Bus> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Bus>(url);
  }

  // Crear un nuevo bus
  createBus(bus: Bus): Observable<Bus> {
    return this.http.post<Bus>(this.apiUrl, bus, this.httpOptions());
  }

  // Actualizar un bus existente
  updateBus(id: number, bus: Bus): Observable<Bus> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Bus>(url, bus, this.httpOptions());
  }

  // Eliminar un bus
  deleteBus(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  // Opciones de cabecera para el cuerpo de las solicitudes HTTP
  private httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
}
