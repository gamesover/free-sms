import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

//import { Hero }                from '../hero/hero';
//import { HeroService }         from '../hero/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'heroes.component.pug',
  styleUrls: [ 'heroes.component.styl' ]
})
export class HeroesComponent implements OnInit {
  ngOnInit(): void {
    //this.getHeroes();
  }
  /*heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router) { }

  getHeroes(): void {
    this.heroService
        .getHeroes()
        .then((heroes: Hero[]) => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then((hero: Hero) => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }*/
}
