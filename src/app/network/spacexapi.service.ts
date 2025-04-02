import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root',
})
export class SpacexapiService {
  private baseURL = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getAllMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.baseURL);
  }

  getMissionByFlightNumber(flightNumber: number): Observable<Mission> {
    return this.http.get<Mission>(`${this.baseURL}/${flightNumber}`);
  }

  filterMissionsByYear(year: string): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.baseURL}?launch_year=${year}`);
  }

  getFilteredMissions(filters: any): Observable<any[]> {
    const { launch_year, launch_success } = filters;
  
    let query = '';
  
    if (launch_year) query += `launch_year=${launch_year}&`;
    if (launch_success !== null && launch_success !== undefined)
      query += `launch_success=${launch_success}&`;
  
    return this.http.get<any[]>(`${this.baseURL}?${query}`);
  }
  
}
