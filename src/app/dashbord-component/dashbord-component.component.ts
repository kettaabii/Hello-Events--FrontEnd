import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import { MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatCardModule, MatCardContent } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { CommonModule } from '@angular/common';
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {LoginRequest, LoginResponse} from "../model/auth.model";
import {LoginService} from "../service/login.service";
import {response} from "express";
import {User} from "../model/user";

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord-component.component.html',
  styleUrls: ['./dashbord-component.component.css'],
  imports: [
    RouterLink,
    MatFormFieldModule,
    MatLabel,
    MatCardModule,
    MatCardContent,
    MatCheckboxModule,
    CommonModule,
    MatButton,
    MatInput,
    MatAnchor,
    ReactiveFormsModule
  ],
  standalone: true
})
export class DashbordComponentComponent {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const loginRequest: LoginRequest = this.loginForm.value as LoginRequest;
      this.loginService.login(loginRequest).subscribe({
        next: (response: LoginResponse) => {
          const loginResponse: LoginResponse = response;
          console.log(loginResponse);
          console.log(loginResponse.token);
          localStorage.setItem('auth-token', loginResponse.token);
          localStorage.setItem('userid', String(loginResponse.user.userId));
          this.router.navigateByUrl('/comptes');
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }
}
