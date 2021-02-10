import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  registerUser(value) {
    return new Promise<any>((resolve, reject) => {

      this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })

  }

  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (this.afAuth.auth.currentUser) {
        this.afAuth.auth.signOut()
          .then(() => {
            console.log("LOG Out");
            resolve();
          }).catch((error) => {
            reject();
          });
      }
    })
  }

  userDetails() {
    return this.afAuth.user
  }
}