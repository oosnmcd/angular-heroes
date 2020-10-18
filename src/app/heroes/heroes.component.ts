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

  }
