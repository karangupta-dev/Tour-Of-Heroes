import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit, OnChanges, DoCheck {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  @Input() simpleInput: string;
  // @Input() someObject:string;

    name:string="akhil";

  constructor(private heroService: HeroService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );

    console.log(">>>>> Hero search child init called");
  }

  ngOnChanges() {
    console.log(">>>>>>>>>onChanges called :");
  }

  ngDoCheck() { 
    // if (this.simpleInput.length > 8) {
    //   console.log(">>>>>>>>>  Hero Search Child Docheck");
    // }
    console.log(">>>>>>>>>doCheck called :");
  }


  abc(){
    console.log("abc called");  }
}