import { CanActivateFn } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  if (inject(AuthService).isLoggedIn()) {
    return true;
  } else {
    return false;
  }
};
