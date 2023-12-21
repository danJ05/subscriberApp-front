import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { AuthService } from 'src/app/features/authentification/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private auth :AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.auth.currentUser$.pipe(take(1)).subscribe({
      next:user => {
        if(user)
        {
          request = request.clone({
            setHeaders:{
              Authorization:`Bearer ${user.token}`
            }
          })
        }
      }
    })
    return next.handle(request);
  }
}
