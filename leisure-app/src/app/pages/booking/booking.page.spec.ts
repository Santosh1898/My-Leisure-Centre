import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BookingPage } from './booking.page';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('BookingPage', () => {
  let component: BookingPage;
  let fixture: ComponentFixture<BookingPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingPage ],
      imports: [IonicModule.forRoot(),
      AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
  }));

  it('should go to active booking on active booking', () => {
    spyOn(router, 'navigate');
    component.active();
    expect(router.navigate).toHaveBeenCalledWith(['active-booking']);
  })
  
});
