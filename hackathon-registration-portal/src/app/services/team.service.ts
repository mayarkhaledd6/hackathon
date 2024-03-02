import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }


  createTeam(team: Team): Observable<Team> {
    return this.http.post<Team>(`${this.baseUrl}/addteam`, team);
  }

}
