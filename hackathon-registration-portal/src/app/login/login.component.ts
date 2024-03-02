import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AppModule } from '../app.module';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  login() {
    // Implement login functionality
    console.log('Login clicked');
  }
}
