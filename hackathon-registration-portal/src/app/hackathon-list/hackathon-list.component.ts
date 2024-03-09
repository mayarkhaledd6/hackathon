import { Component } from '@angular/core';
import { HackathonService } from '../services/hackathon.service';
import { Hackathon } from '../models/hackathon.model';
import { MatCardModule } from '@angular/material/card';
import { AppModule } from '../app.module';
import { Router } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';



@Component({
  selector: 'app-hackathon-list',
  templateUrl: './hackathon-list.component.html',
  styleUrls: ['./hackathon-list.component.css']
})
export class HackathonListComponent {
  hackathons: Hackathon[] = []; // Assuming this is an array of hackathon objects

  // Fetch hackathons from backend service or mock data
  constructor(private hackathonService: HackathonService,private router: Router) {
 
  }

  ngOnInit(): void {
    console.log("OnInit");
    
    this.getHackathons();
  }

  getHackathons(): void {
    this.hackathonService.getAllHackathons()
      .subscribe(hackathons => {
        this.hackathons = hackathons;
      });
  }

  logout(): void {
    // Redirect to login page
    this.router.navigate(['']);
  }

  home(): void {
    // Redirect to home page
    this.router.navigate(['hackathons']);
  }

  btnDetails(id: number): void {
    // Assuming you want to navigate to a route named 'details' with the hackathon ID in the URL
    // Replace 'details' with your actual route name
    this.router.navigate(['/hackathons', id]);
  }
}
