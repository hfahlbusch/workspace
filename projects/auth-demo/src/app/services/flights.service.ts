import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Flight {
  id: number;
  from: string;
  to: string;
  date: string;
  delayed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  constructor(private httpClient: HttpClient) { }

  public getFlights(): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>('/api/flight');
  }
}
