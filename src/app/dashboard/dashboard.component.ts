import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Hero } from './../models/hero.model';
import { AppState } from './../app.state';

import * as HeroActions from './../actions/hero.actions';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  // heroes: Hero[] = [];
  heroes: Observable<Hero[]>;
  name: string = 'Akhil';
  someObject="fa";
  interval ;
  ip:number=4;
  options = [4,8,12];

  constructor(private heroService: HeroService,private store: Store<AppState>) {
    console.log(">>>>>  DASHBOARD CONSTRUCTOR invoked");
   
  }

  ngOnInit() {
  
     this.getHeroes();
    // this.interval = setInterval(function(){
    //   console.log("setInterval")
    // },1000)
    // console.log(">>>>>  DASHBOARD init invoked");
  }

  ngOnDestroy() {
    console.log(">>>>> DASHBOARD Destroyed");
    clearInterval(this.interval);
  }

  getHeroes(): void {
    // this.heroService.getHeroes()
    //   .subscribe(heroes => this.heroes = heroes);
     this.heroes = this.store.select('hero');
  
  }
}