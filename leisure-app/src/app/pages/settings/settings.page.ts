import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { SettingsPageForm } from './settings.page.form';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  form! : FormGroup;
  email : string = '';

  constructor(private auth : AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form= new SettingsPageForm(this.formBuilder).createForm();
  }

  login(){
    this.router.navigate(['login']);
  }

  reset(){
    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    this.auth.reset(this.email);
    this.email = '';
  }
  

}