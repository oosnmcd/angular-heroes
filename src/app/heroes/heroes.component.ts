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

  selectedHero: Hero;
  //instanciates an array of the type Hero (Hero[]) called heroes
  heroes: Hero[];

  
 
  constructor(
    //criates the private instance of "type" HeroService
    private heroService: HeroService, private messageService: MessageService) { 

    }
   
  ngOnInit() {
    this.getHeroes();
  }


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  // getHeroes method that says that the above heroes corresponds to the return of the method getHeroes()

  getHeroes(): void {
  this.heroService.getHeroes()
  .subscribe(heroes => this.heroes = heroes)
  }

  }
