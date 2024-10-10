import { Bus } from './../models/bus';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class BusService {
    private apiUrl = 'http://localhost:8080/api/buses';

    constructor(private http: HttpClient) { }

    getAllBuses(): Observable<Bus[]> {
        return this.http.get<Bus[]>(this.apiUrl);
    }

    getBusById(id: number): Observable<Bus> {
        return this.http.get<Bus>(`${this.apiUrl}/${id}`);
    }

    createBus(bus: Bus): Observable<Bus> {
        return this.http.post<Bus>(this.apiUrl, bus);
    }

    updateBus(id: number, bus: Bus): Observable<Bus> {
        return this.http.put<Bus>(`${this.apiUrl}/${id}`, bus);
    }

    deleteBus(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
