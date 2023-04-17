import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //form group
  loginFb: FormGroup;



  constructor (private login:LoginServiceService, private fb: FormBuilder) {

    //set validations
    this.loginFb = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  
  ngOnInit(): void {
    
  }
  
  //login form submission
  submitForm(){
    this.login.login(this.loginFb.value.email, this.loginFb.value.password)
  }

  

}
