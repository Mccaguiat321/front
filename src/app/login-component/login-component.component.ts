import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { name, password } = this.loginForm.value;

      // Send login request to the backend
      this.http.post('http://localhost:3000/login', { name, password }).subscribe({
        next: (response: any) => {
          if (response.message === 'Welcome back!') {
            this.router.navigate(['/pinagsama']); // Redirect to student page on successful login
          } else {
            this.errorMessage = response.message; // Display error message from the backend
          }
        },
        error: (err) => {
          this.errorMessage = 'An error occurred. Please try again later.';
          console.error(err);
        }
      });
    }
  }
}
