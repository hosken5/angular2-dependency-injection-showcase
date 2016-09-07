/* tslint:disable:one-line:check-open-brace*/
import { OpaqueToken } from '@angular/core';

export const TITLE = new OpaqueToken('title');

import { Component, Inject } from '@angular/core';

import { DateLoggerService,
         MinimalLogger }     from './date-logger.service';
import { Hero }              from './hero';
import { HeroService }       from './hero.service';
import { LoggerService }     from './logger.service';
import { RUNNERS_UP,
         runnersUpFactory }  from './runners-up';

const someHero = new Hero(42, 'Magma', 'Had a great month!', '555-555-5555');

const template = `
  <h3>{{title}}</h3>
  <div>Winner: <strong>{{heroOfTheMonth.name}}</strong></div>
  <div>Reason for award: <strong>{{heroOfTheMonth.description}}</strong></div>
  <div>Runners-up: <strong id="rups1">{{runnersUp}}</strong></div>

  <p>Logs:</p>
  <div id="logs">
    <div *ngFor="let log of logs">{{log}}</div>
  </div>
  `;

@Component({
  selector: 'hero-of-the-month',
  template: template,
  providers: [
    { provide: Hero,          useValue:    someHero },
    { provide: TITLE,         useValue:   'Hero of the Month' },
    { provide: HeroService,   useClass:    HeroService },
    { provide: LoggerService, useClass:    DateLoggerService },
    { provide: MinimalLogger, useExisting: LoggerService },
    { provide: RUNNERS_UP,    useFactory:  runnersUpFactory(2), deps: [Hero, HeroService] }
  ]
})
export class HeroOfTheMonthComponent {
  logs: string[] = [];

  constructor(
      logger: MinimalLogger,
      public heroOfTheMonth: Hero,
      @Inject(RUNNERS_UP) public runnersUp: string,
      @Inject(TITLE) public title: string)
  {
    this.logs = logger.logs;
    logger.logInfo('starting up');
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/