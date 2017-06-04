import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  getrHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().then( heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getrHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
