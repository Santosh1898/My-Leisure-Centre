import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  booking(){
    this.router.navigate(['booking']);
  }

  logout(){
    this.router.navigate(['login']);
  }

  settings(){
    this.router.navigate(['settings']);
  }
  active(){
    this.router.navigate(['active-booking']);
  }

}
