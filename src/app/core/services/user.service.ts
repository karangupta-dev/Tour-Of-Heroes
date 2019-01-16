import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import "rxjs/add/observable/throw";
import { User } from "../../models/user";

export const MOCK_USER = new User();



MOCK_USER.email = "akhil@test.com";
MOCK_USER.name = "akhil";
MOCK_USER.password = "moto";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private _authenticated = false;

  public authenticate(email: string, password: string): Observable<User> {
    // Normally you would do an HTTP request to determine to
    // attempt authenticating the user using the supplied credentials.

    if (email === MOCK_USER.email && password === MOCK_USER.password) {
      this._authenticated = true;
      //return Observable.of(MOCK_USER);

    //   this.
    return new Observable((observer) => { observer.complete() });
    }

    return Observable.throw(new Error("Invalid email or password"));
  }

  
  constructor() { }
}
