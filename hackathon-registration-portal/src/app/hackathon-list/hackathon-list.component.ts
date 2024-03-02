import { Component } from '@angular/core';
import { HackathonService } from '../services/hackathon.service';
import { Hackathon } from '../models/hackathon.model';
import { MatCardModule } from '@angular/material/card';
import { AppModule } from '../app.module';


@Component({
  selector: 'app-hackathon-list',
  templateUrl: './hackathon-list.component.html',
  styleUrls: ['./hackathon-list.component.css']
})
export class HackathonListComponent {
  hackathons: Hackathon[] = []; // Assuming this is an array of hackathon objects

  // Fetch hackathons from backend service or mock data
  constructor(private hackathonService: HackathonService) {
    // this.hackathons = [
    //   {
    //     name: 'Hackathon 1',
    //     theme: 'Theme 1',
    //     registrationDateRange: '01/01/2022 - 01/15/2022',
    //     eventDate: '02/01/2022',
    //     challenges: ['Challenge 1', 'Challenge 2'],
    //     maxTeamSize: 4,
    //     maxNumberOfTeams: 20,
    //     registeredTeams: [{ name: 'Team 1' }, { name: 'Team 2' }]
    //   },
    //   // Add more hackathon objects as needed
    // ];
  }

  ngOnInit(): void {
    this.getHackathons();
  }

  getHackathons(): void {
    this.hackathonService.getAllHackathons()
      .subscribe(hackathons => this.hackathons = hackathons);
  }
}
