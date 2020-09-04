import { Component, OnInit } from '@angular/core';
import {faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons';//**.. */
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public faQuoteLeft = faQuoteLeft;//*..
  public faQuoteRight = faQuoteRight;//*..

  public fbFormGroup = this.fb.group({
    Email: ['', Validators.required],
    Password: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {}

  async submithere() {
    const submitdata = this.fbFormGroup.value;

    // console.log(submitdata);

    //ajax call
    const url ="localhost:3000/validuser";
    const result: any = await this.http.post(url, submitdata).toPromise();
    if(result && result.opr) {
      sessionStorage.setItem('sid', 'true');
      this.router.navigate(['home']);
    } else {
      alert('data not matched');
    }

  }


}
