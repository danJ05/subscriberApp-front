import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../authentification/auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {

  const auth = inject(AuthService);
  const router = inject(Router);

  if(!auth.isLoggedIn())
  {
    router.navigateByUrl('/admin/login')
  }
  return true;
};
