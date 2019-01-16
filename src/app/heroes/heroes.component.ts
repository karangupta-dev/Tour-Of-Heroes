import { Component, OnInit,OnDestroy,AfterContentInit,AfterViewInit,OnChanges } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit,OnDestroy,OnChanges {
  heroes: Hero[];

  constructor(private heroService: HeroService) {
    console.log(">>>>> HEROES CONSTRUCTOR invoked");
   }

  ngOnInit() {
    this.getHeroes();
    console.log(">>>>>   HEROES init invoked");
  }
  
  ngOnChanges() {
    console.log(">>>>>>>>>onChanges called :");
  }
    ngOnDestroy(){
      console.log(">>>>>   HEROES Destroyed");
    }
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes(); 
  // }
  
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}