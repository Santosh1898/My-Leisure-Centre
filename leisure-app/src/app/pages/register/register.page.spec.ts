import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RegisterPage } from './register.page';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPage ],
      imports: [IonicModule.forRoot(),
      AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
  }));

  
  it('should go to home page on create account', () => {
    spyOn(router, 'navigate');
    component.create();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  })

  it('should go to login page on already have an account', () => {
    spyOn(router, 'navigate');
    component.login();
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  })
});
