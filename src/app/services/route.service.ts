import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private apiUrl = 'http://localhost:8000/api/shortest-path';
  constructor(private http: HttpClient) { }

  getRouteData(fromStation: string, toStation: string): Observable<any> {
    const params = { from: fromStation, to: toStation}
    return this.http.get(this.apiUrl, {params})
  }
}
