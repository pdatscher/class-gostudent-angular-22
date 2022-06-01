import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService:AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(!this.authService.isLoggedIn() || !this.authService.getToken()){
      return next.handle(request);
    }
    request = request.clone({
      setHeaders: {
        'Authorization': `Bearer ${this.authService.getToken()}`,
      },
    });

    return next.handle(request);
  }
}
