import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;

  constructor(private fireauth : AngularFireAuth, private router : Router) {
    this.fireauth.authState.subscribe((user) => {
      this.isLoggedIn = !!user;
    });
  }

  // login method
  login(email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( res => {
      this.isLoggedIn = true;
      localStorage.setItem('token','true');
      this.router.navigate(['home']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

  // register method
  register(email : string, password : string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
      alert('Registration Successful');
      this.router.navigate(['/login']);
      this.sendEmailForVarification(res.user);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  // sign out
  logout() {
    this.fireauth.signOut().then( () => {
      this.isLoggedIn = false;
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  }

  // reset password
  reset(email: string) {
    // Try to send a password reset email
    this.fireauth.sendPasswordResetEmail(email).then(() => {
      alert('Password reset email is sent to your registered email address.');
      this.router.navigate(['/login']);
    }).catch((error) => {

      console.error('Error sending password reset email:', error);
      alert('An error occurred while sending the password reset email. Please try again later.');
      this.router.navigate(['/settings']);
    });

  }  

  // email verification
  sendEmailForVarification(user : any) {
    user.sendEmailVarification().then((res : any) => {
      this.router.navigate(['/login']);
    }, (err : any) => {
      alert('Something went wrong, not able to send email to the provided email address.')
    })
  }

 
}

