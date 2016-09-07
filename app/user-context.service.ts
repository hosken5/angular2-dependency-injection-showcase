import { Injectable }    from '@angular/core';

import { LoggerService } from './logger.service';
import { UserService }   from './user.service';

@Injectable()
export class UserContextService {
  name: string;
  role: string;
  loggedInSince: Date;

  constructor(private userService: UserService, private loggerService: LoggerService) {
    this.loggedInSince = new Date();
  }

  loadUser(userId: number) {
    let user = this.userService.getUserById(userId);
    this.name = user.name;
    this.role = user.role;

    this.loggerService.logDebug('loaded User');
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/