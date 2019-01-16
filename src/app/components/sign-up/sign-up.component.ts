import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as TutorialActions from '../../actions/tutorial.actions';
import * as UserActions from './../../actions/user.actions';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

 

  // user:User = new User();
  authuser:boolean=true;
  public usermail;
  
  constructor(private store: Store<AppState>,private router:Router) { 
    
  }
  

 
  ngOnInit() {
  }

  
  
  addUser(email,password){
    this.store.dispatch
    (new UserActions.AddUser({email:email,password:password}))
    console.log("Value dispatched to store" + email,password);
    this.authuser =false;
    this.router.navigate(['login']);
  }
  
}
