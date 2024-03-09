import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AppModule } from '../app.module';
import { HackathonService } from '../services/hackathon.service';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-hackathon-details',
  templateUrl: './hackathon-details.component.html',
  styleUrls: ['./hackathon-details.component.css']
})
export class HackathonDetailsComponent {
  hackathon: any; // Assuming this is a hackathon object

  startDate: any;
  endDate: any;


  // Fetch hackathon details based on id from backend service or mock data
  constructor(private router: Router, private route: ActivatedRoute, private hackathonService: HackathonService) {
  }

  ngOnInit(): void {
    this.getHackathons();
  }

  getHackathons(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.hackathonService.getHackathonById(Number(id))
      .subscribe(hackathon => this.hackathon = hackathon);
  }

  logout(): void {
    // Redirect to login page
    this.router.navigate(['']);
  }

  home(): void {
    // Redirect to home page
    this.router.navigate(['hackathons']);
  }

}
