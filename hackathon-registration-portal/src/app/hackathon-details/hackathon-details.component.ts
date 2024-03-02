import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-hackathon-details',
  templateUrl: './hackathon-details.component.html',
  styleUrls: ['./hackathon-details.component.css']
})
export class HackathonDetailsComponent {
  hackathon: any; // Assuming this is a hackathon object

  // Fetch hackathon details based on id from backend service or mock data
  constructor() {
    this.hackathon = {
      name: 'Hackathon 1',
      theme: 'Theme 1',
      registrationDateRange: '01/01/2022 - 01/15/2022',
      eventDate: '02/01/2022',
      challenges: ['Challenge 1', 'Challenge 2'],
      maxTeamSize: 4,
      maxNumberOfTeams: 20,
      registeredTeams: [{ name: 'Team 1' }, { name: 'Team 2' }]
    };
  }
}
