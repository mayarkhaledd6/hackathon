import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  email: string = '';

  constructor(private authService: AuthService) {}

  signup() {
    this.authService.registerUser(this.username, this.email, this.password)
      .subscribe(success => {
        if (success) {
          // Redirect or show success message
          console.log('Registration successful');
        } else {
          // Show error message
          console.log('Registration failed');
        }
      });
  }
}
