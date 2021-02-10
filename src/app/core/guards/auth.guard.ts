import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild,
  CanLoad,
  UrlSegment,
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  router: any;
  constructor(private authService: AuthService, router: Router) {}
  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.checkAuthState(state.url);
  }
  canActivateChild(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(router, state);
  }

  canLoad(route: Router, segments: UrlSegment[]): Observable<boolean> {
    const url = segments.map((s) => `/${s}`).join('');
    return this.checkAuthState(url).pipe(take(1));
  }

  private checkAuthState(redirect: string): Observable<boolean> {
    return this.authService.isAuthenticated.pipe(
      tap((is) => {
        if (!is) {
          this.router.navigate(['/login'], {
            queryParams: { redirect },
          });
        }
      })
    );
  }
}
