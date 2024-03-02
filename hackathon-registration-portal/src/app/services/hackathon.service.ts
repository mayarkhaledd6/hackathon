import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hackathon } from '../models/hackathon.model';

@Injectable({
  providedIn: 'root'
})
export class HackathonService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getAllHackathons(): Observable<Hackathon[]> {
    return this.http.get<Hackathon[]>(`${this.baseUrl}/gethackathons`);
  }

  getHackathonById(id: number): Observable<Hackathon> {
    return this.http.get<Hackathon>(`${this.baseUrl}/gethackathonbyid/${id}`);
  }

  createHackathon(hackathon: Hackathon): Observable<Hackathon> {
    return this.http.post<Hackathon>(`${this.baseUrl}/addhackathon`, hackathon);
  }

  updateHackathon(id: number, hackathon: Hackathon): Observable<Hackathon> {
    return this.http.put<Hackathon>(`${this.baseUrl}/updatehackathons/${id}`, hackathon);
  }

  deleteHackathon(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deletehackathons/${id}`);
  }
}
