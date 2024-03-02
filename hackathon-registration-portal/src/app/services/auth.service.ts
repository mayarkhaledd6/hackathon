import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/api'; // Base URL of your Node.js backend API

  constructor(private http: HttpClient) { }

  loginUser(email: string, password: string): Observable<boolean> {
    return this.http.post<any>(`${this.baseUrl}/user/login`, { email, password })
      .pipe(
        map(response => {
          // Check if login successful
          if (response && response.token) {
            // Store token in local storage
            localStorage.setItem('token', response.token);
            return true;
          } else {
            return false;
          }
        }),
        catchError(error => {
          console.error('Login failed:', error);
          return of(false);
        })
      );
  }

  registerUser(username: string, email: string, password: string): Observable<boolean> {
    return this.http.post<any>(`${this.baseUrl}/user/register`, { username, email, password })
      .pipe(
        map(response => {
          // Check if registration successful
          if (response && response.success) {
            return true;
          } else {
            return false;
          }
        }),
        catchError(error => {
          console.error('Registration failed:', error);
          return of(false);
        })
      );
  }

  loginAdmin(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(`${this.baseUrl}/admin/login`, { username, password })
      .pipe(
        map(response => {
          // Check if login successful
          if (response && response.token) {
            // Store token in local storage
            localStorage.setItem('token', response.token);
            return true;
          } else {
            return false;
          }
        }),
        catchError(error => {
          console.error('Admin login failed:', error);
          return of(false);
        })
      );
  }

  logout(): void {
    // Remove token from local storage
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    // Check if token exists in local storage
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    // Get token from local storage
    return localStorage.getItem('token');
  }
}
