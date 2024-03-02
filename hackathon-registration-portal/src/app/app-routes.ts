import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HackathonListComponent } from './hackathon-list/hackathon-list.component';
import { HackathonDetailsComponent } from './hackathon-details/hackathon-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route redirects to login
  { path: 'login', component: LoginComponent }, // Login page
  { path: 'signup', component: SignupComponent }, // Signup page
  { path: 'hackathons', component: HackathonListComponent }, // Hackathon list page
  { path: 'hackathons/:id', component: HackathonDetailsComponent }, // Hackathon details page with parameter (hackathon id)
  { path: '**', redirectTo: '/login' } // Redirect to login page for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
