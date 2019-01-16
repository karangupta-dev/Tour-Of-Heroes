import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Router } from '../../../../node_modules/@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { AppState } from '../../app.state';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
// import { HeroService } from '../hero.service';
import * as UserActions from './../../actions/user.actions';

import { SessionStorageService} from 'angular-web-storage';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {


  public euser:string;
  public puser:string;

  loggedp:boolean=false;
  loggede:boolean=false;
  logmessage:string;
  rpass:boolean=false;
 
  // users: Observable<User[]>;
  public suser;


 constructor(private router:Router,public session: SessionStorageService,private store: Store<AppState>) { 
    // this.users = this.store.select('user');
    // console.log(this.users);
    
  }

  ngOnInit() {
      
  }

  log(){
    
    this.store.select('user').subscribe((user)=>{
      this.suser= user;
      // console.log(this.suser+ "This is suser-------");
    })

     this.suser.forEach(temp => {
      if(temp.email === this.euser){
        this.loggede=true;
        temp.email=this.euser;
        // alert(this.euser);
        
        if(temp.password === this.puser){
          this.loggedp=true;
        }
      }
    });

    if(this.loggedp && this.loggede){
      this.router.navigate(['dashboard']);
    }
    else if(this.loggedp && !this.loggede){
      alert("wrong email");
    } 
    else{
      alert("wrong credentials");
    }
  }
}

