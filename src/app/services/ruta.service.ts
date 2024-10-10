import { Ruta } from './../models/ruta';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class RutaService {
    private apiUrl = 'http://localhost:8080/api/rutas';

    constructor(private http: HttpClient) { }

    getAllRutas(): Observable<Ruta[]> {
        return this.http.get<Ruta[]>(this.apiUrl);
    }

    getRutaById(id: number): Observable<Ruta> {
        return this.http.get<Ruta>(`${this.apiUrl}/${id}`);
    }

    createRuta(ruta: Ruta): Observable<Ruta> {
        return this.http.post<Ruta>(this.apiUrl, ruta);
    }

    updateRuta(id: number, ruta: Ruta): Observable<Ruta> {
        return this.http.put<Ruta>(`${this.apiUrl}/${id}`, ruta);
    }

    deleteRuta(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}