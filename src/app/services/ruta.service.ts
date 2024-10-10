import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ruta } from '../models/ruta';

@Injectable({
  providedIn: 'root'
})
export class RutaService {
  private apiUrl = 'http://localhost:8080/api/rutas';  // URL del backend (ajustar si es necesario)

  constructor(private http: HttpClient) { }

  // Obtener todas las rutas
  getAllRutas(): Observable<Ruta[]> {
    return this.http.get<Ruta[]>(this.apiUrl);
  }

  // Obtener una ruta por su ID
  getRutaById(id: number): Observable<Ruta> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Ruta>(url);
  }

  // Crear una nueva ruta
  createRuta(ruta: Ruta): Observable<Ruta> {
    return this.http.post<Ruta>(this.apiUrl, ruta, this.httpOptions());
  }

  // Actualizar una ruta existente
  updateRuta(id: number, ruta: Ruta): Observable<Ruta> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Ruta>(url, ruta, this.httpOptions());
  }

  // Eliminar una ruta
  deleteRuta(id: number): Observable<void> {
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
