import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AppModule } from '../app.module';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  fullName: string = '';

  signup() {
    // Implement signup functionality
    console.log('Sign Up clicked');
  }
}
