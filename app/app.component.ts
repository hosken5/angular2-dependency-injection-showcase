import { Component } from '@angular/core';

import { LoggerService }      from './logger.service';
import { UserContextService } from './user-context.service';
import { UserService }        from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [LoggerService, UserContextService, UserService]
})
export class AppComponent {

  private userId: number = 1;

  constructor(logger: LoggerService, public userContext: UserContextService) {
    userContext.loadUser(this.userId);
    logger.logInfo('AppComponent initialized');
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/