import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { RegisterPageForm } from './register.page.form';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form! : FormGroup;
  email : string = '';
  password : string = '';


  constructor(private auth : AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form= new RegisterPageForm(this.formBuilder).createForm();
  }

  register(){
    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.register(this.email, this.password);
    this.email = '';
    this.password = '';
    
  }

  //create(){
    //this.router.navigate(['home']);
  //}

  login(){
    this.router.navigate(['login']);
  }

}
