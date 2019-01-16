import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Hero } from './../models/hero.model';
import { AppState } from './../app.state';

import * as HeroActions from './../actions/hero.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  

  heroes: Observable<Hero[]>;

  // Section 2
  constructor(private store: Store<AppState>) { 
  
    this.heroes = store.select('hero');
  
  } 

  delHero(index) {
    this.store.dispatch(new HeroActions.RemoveHero(index) )
  }

  ngOnInit() {}

}
