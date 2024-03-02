import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService,private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      userType: ['', Validators.required] // Adding userType field to the form
    });
  }

  onSubmit() {
    const userType = this.loginForm.value.userType;
    if (this.loginForm.valid && userType == "admin") {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      // Call authentication service to log in
      this.authService.loginAdmin(username, password).subscribe(
        (response) => {
          // Handle successful login
          console.log('Login successful');
          this.router.navigate(['/hackathons']);
        },
        (error) => {
          // Handle login error
          this.errorMessage = error.message;
          console.error('Login error:', error);
          this.router.navigate(['/hackathons']);
        }
      );
    }else if (this.loginForm.valid && userType == "participant") {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      // Call authentication service to log in
      this.authService.loginUser(username, password).subscribe(
        (response) => {
          // Handle successful login
          console.log('Login successful');
          this.router.navigate(['/hackathons']);
        },
        (error) => {
          // Handle login error
          this.errorMessage = error.message;
          console.error('Login error:', error);
          this.router.navigate(['/hackathons']);
        }
      );
    }
  }
}
