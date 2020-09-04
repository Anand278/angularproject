import { Component, OnInit } from '@angular/core';
import {faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public faQuoteLeft = faQuoteLeft;
  public faQuoteRight = faQuoteRight;

  public fbFormGroup = this.fb.group({
    Username: ['', Validators.required],
    Email: ['', Validators.required],
    Password: ['', Validators.required],
    ConfirmPassword: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, 
              private router: Router, 
              private http: HttpClient) { }

  ngOnInit(): void {
  }

  async signuphere() {
    const signupdata = this.fbFormGroup.value;
    const url = 'http://localhost:3000/adduser';

    await this.http.post(url, signupdata).toPromise();

    this.router.navigate(['login']);
  }

}
