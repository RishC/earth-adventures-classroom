import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  errorMessage;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    const result = this.authService.login(this.loginForm.value);
    if (result.success) {
      if (result.user.type === 'teacher') {
        this.router.navigate(['/dashboard/teacher']);
      } else {
        this.router.navigate(['/dashboard']);
      }
    } else {
      this.errorMessage = result.message;
    }
  }

}
