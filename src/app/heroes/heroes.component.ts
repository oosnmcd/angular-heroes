import { Component, OnInit } from '@angular/core';

import { Hero }  from '../Hero';
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  //instanciates an array of the type Hero (Hero[]) called heroes
  heroes: Hero[];

  
 
  constructor(private heroService: HeroService){
   
    }
   
  ngOnInit() {
    this.getHeroes();
  }

  // getHeroes method that says that the above heroes corresponds to the return of the method getHeroes()

  getHeroes(): void {
  this.heroService.getHeroes()
  .subscribe(heroes => this.heroes = heroes)
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
