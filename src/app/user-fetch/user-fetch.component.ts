import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
import * as UserActions from './../actions/user.actions';

@Component({
  selector: 'app-user-fetch',
  templateUrl: './user-fetch.component.html',
  styleUrls: ['./user-fetch.component.css']
})
export class UserFetchComponent implements OnInit {

  // public users;
  users: Observable<User[]>;
  
  constructor(private store: Store<AppState>) {

    // this.users = store.select('user').subscribe((user)=>{
    //   console.log(user);
    // });

    this.users = store.select('user');
    console.log("value fetched from store" + this.users);
   }

   delUser(index) {
    this.store.dispatch(new UserActions.RemoveUser(index) )
  }

  ngOnInit() {
  }

}
