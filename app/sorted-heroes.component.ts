import { Component, OnInit } from '@angular/core';

import { Hero }              from './hero';
import { HeroService }       from './hero.service';

/////// HeroesBaseComponent /////
@Component({
  selector: 'unsorted-heroes',
  template: `<div *ngFor="let hero of heroes">{{hero.name}}</div>`,
  providers: [HeroService]
})
export class HeroesBaseComponent implements OnInit {
  constructor(private heroService: HeroService) { }

  heroes: Array<Hero>;

  ngOnInit() {
    this.heroes = this.heroService.getAllHeroes();
    this.afterGetHeroes();
  }

  // Post-process heroes in derived class override.
  protected afterGetHeroes() {}

}

/////// SortedHeroesComponent /////
@Component({
  selector: 'sorted-heroes',
  template: `<div *ngFor="let hero of heroes">{{hero.name}}</div>`,
  providers: [HeroService]
})
export class SortedHeroesComponent extends HeroesBaseComponent {
  constructor(heroService: HeroService) {
    super(heroService);
  }

  protected afterGetHeroes() {
    this.heroes = this.heroes.sort((h1, h2) => {
      return h1.name < h2.name ? -1 :
            (h1.name > h2.name ? 1 : 0);
    });
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/