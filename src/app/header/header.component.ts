import { Component, OnInit } from '@angular/core';
import { SessionStorageService} from 'angular-web-storage';
import { Router } from '.../../../node_modules/@angular/router';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Tour Of Heroes'; 
  public auser;
  public huser;
  
  constructor(public session: SessionStorageService,private router:Router,private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('user').subscribe((user)=>{
      this.auser= user;
      console.log(this.auser+ "This is auser-------");
    })
    this.auser.forEach(temp => {
      if(temp.email === this.auser){
       
        if(temp.password === this.auser){
        
        }
      }
    });
  }

  logout(){
    this.session.clear();
    this.router.navigate(['login/']);
   console.log("logout called");
    
  }

}
