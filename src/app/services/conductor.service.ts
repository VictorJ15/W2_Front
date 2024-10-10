import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conductor } from '../models/conductor';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {
  private httpOptions = {
    headers:new  HttpHeaders({
      "Content-type": "application/json"
    })
  }
  private apiUrl = 'http://localhost:8080/api/conductores';

  constructor(private http: HttpClient) {}

  getAllConductores(): Observable<Conductor[]> {
    return this.http.get<Conductor[]>(this.apiUrl, this.httpOptions);
  }

  getConductorById(id: number): Observable<Conductor> {
    return this.http.get<Conductor>(`${this.apiUrl}/${id}`);
  }

  createConductor(conductor: Conductor): Observable<Conductor> {
    return this.http.post<Conductor>(this.apiUrl, conductor);
  }

  updateConductor(id: number, conductor: Conductor): Observable<Conductor> {
    return this.http.put<Conductor>(`${this.apiUrl}/${id}`, conductor);
  }

  deleteConductor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
