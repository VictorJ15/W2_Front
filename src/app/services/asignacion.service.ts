import { Asignacion } from './../models/asignacion';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AsignacionService {
  private apiUrl = 'http://localhost:8080/api/asignaciones';

  constructor(private http: HttpClient) {}

  getAllAsignaciones(): Observable<Asignacion[]> {
    return this.http.get<Asignacion[]>(this.apiUrl);
  }

  getAsignacionById(id: number): Observable<Asignacion> {
    return this.http.get<Asignacion>(`${this.apiUrl}/${id}`);
  }

  createAsignacion(asignacion: Asignacion): Observable<Asignacion> {
    return this.http.post<Asignacion>(this.apiUrl, asignacion);
  }

  updateAsignacion(id: number, asignacion: Asignacion): Observable<Asignacion> {
    return this.http.put<Asignacion>(`${this.apiUrl}/${id}`, asignacion);
  }

  deleteAsignacion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
