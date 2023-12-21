import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToDestination(selectedValue: string) {
    if (selectedValue === 'amesbury') {
      this.router.navigate(['/centre-amesbury']);
    }
    if (selectedValue === 'bradford') {
      this.router.navigate(['/centre-bradford']);
    }
    if (selectedValue === 'calne') {
      this.router.navigate(['/centre-calne']);
    }
    if (selectedValue === 'castle-place') {
      this.router.navigate(['/centre-castle-place']);
    }
    if (selectedValue === 'devizes') {
      this.router.navigate(['/centre-devizes']);
    }
    if (selectedValue === 'durrington') {
      this.router.navigate(['/centre-durrington']);
    }
    if (selectedValue === 'five') {
      this.router.navigate(['/centre-five']);
    }
    if (selectedValue === 'leighton') {
      this.router.navigate(['/centre-leighton']);
    }
    if (selectedValue === 'lime-kiln') {
      this.router.navigate(['/centre-lime-kiln']);
    }
    if (selectedValue === 'marlborough') {
      this.router.navigate(['/centre-marlborough']);
    }
    if (selectedValue === 'melksham') {
      this.router.navigate(['/centre-melksham']);
    }
    if (selectedValue === 'nadder') {
      this.router.navigate(['/centre-nadder']);
    }
    if (selectedValue === 'olympiad') {
      this.router.navigate(['/centre-olympiad']);
    }
    if (selectedValue === 'springfield') {
      this.router.navigate(['/centre-springfield']);
    }
    if (selectedValue === 'activity-zone') {
      this.router.navigate(['/centre-activity-zone']);
    }
    if (selectedValue === 'vale') {
      this.router.navigate(['/centre-vale']);
    }
    if (selectedValue === 'tidworth') {
      this.router.navigate(['/centre-tidworth']);
    }
    if (selectedValue === 'trowbridge') {
      this.router.navigate(['/centre-trowbridge']);
    }
    if (selectedValue === 'warminster') {
      this.router.navigate(['/centre-warminster']);
    }
    if (selectedValue === 'westbury') {
      this.router.navigate(['/centre-westbury']);
    }
  }

}
