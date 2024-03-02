import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HackathonListComponent } from './hackathon-list/hackathon-list.component';
import { HackathonDetailsComponent } from './hackathon-details/hackathon-details.component';
import { HackathonService } from './services/hackathon.service';
import { TeamService } from './services/team.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    HackathonListComponent,
    HackathonDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule, // Add MatCardModule here
    FormsModule,
    HttpClientModule
  ],
  providers: [HackathonService, TeamService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
