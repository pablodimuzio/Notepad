import { CanActivateFn } from '@angular/router';

import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
