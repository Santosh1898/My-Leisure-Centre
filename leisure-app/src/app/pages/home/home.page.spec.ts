import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HomePage } from './home.page';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(),
      AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
  }));

  it('should go to booking page on booking', () => {
    spyOn(router, 'navigate');
    component.booking();
    expect(router.navigate).toHaveBeenCalledWith(['booking']);
  })
  it('should go to login page on logout', () => {
    spyOn(router, 'navigate');
    component.logout();
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  })
});
