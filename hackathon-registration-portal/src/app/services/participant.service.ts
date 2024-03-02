import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Participant } from '../models/participant.model';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getAllParticipants(): Observable<Participant[]> {
    return this.http.get<Participant[]>(`${this.baseUrl}/getparticipants`);
  }

  // getParticipantById(id: number): Observable<Participant> {
  //   return this.http.get<Participant>(`${this.baseUrl}/gethackathonbyid/${id}`);
  // }

  // createParticipant(hackathon: Participant): Observable<Participant> {
  //   return this.http.post<Participant>(`${this.baseUrl}/addhackathon`, hackathon);
  // }

  // updateParticipant(id: number, hackathon: Participant): Observable<Participant> {
  //   return this.http.put<Participant>(`${this.baseUrl}/updatehackathons/${id}`, hackathon);
  // }

  // deleteParticipant(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.baseUrl}/deletehackathons/${id}`);
  // }
}
