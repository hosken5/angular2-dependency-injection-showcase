import { Component }             from '@angular/core';

import { HeroService }          from './hero.service';
import { LoggerService }        from './logger.service';

//////// HeroBiosComponent ////
@Component({
  selector: 'hero-bios',
  template: `
    <hero-bio [heroId]="1"></hero-bio>
    <hero-bio [heroId]="2"></hero-bio>
    <hero-bio [heroId]="3"></hero-bio>`,
  providers: [HeroService]
})
export class HeroBiosComponent {
  constructor(logger: LoggerService) {
    logger.logInfo('Creating HeroBiosComponent');
  }
}

//////// HeroBiosAndContactsComponent ////
@Component({
  selector: 'hero-bios-and-contacts',
  template: `
    <hero-bio [heroId]="1"> <hero-contact></hero-contact> </hero-bio>
    <hero-bio [heroId]="2"> <hero-contact></hero-contact> </hero-bio>
    <hero-bio [heroId]="3"> <hero-contact></hero-contact> </hero-bio>`,
  providers: [HeroService]
})
export class HeroBiosAndContactsComponent {
  constructor(logger: LoggerService) {
    logger.logInfo('Creating HeroBiosAndContactsComponent');
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/