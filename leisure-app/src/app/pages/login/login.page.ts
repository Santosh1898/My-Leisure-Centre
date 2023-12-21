import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form! : FormGroup;
  email : string = '';
  password : string = '';

  constructor(private auth : AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form= new LoginPageForm(this.formBuilder).createForm();

  }
  login(){
    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';
    //this.router.navigate(['home']);
  }

  register(){
    this.router.navigate(['register']);
  }

  settings(){
    this.router.navigate(['settings']);
  }

}