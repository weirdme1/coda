import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/firebase/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  constructor(public authService: AuthService,
    public router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // Guard for user is login or not
    let user = JSON.parse(localStorage.getItem('user'));
    if (!user || user === null) {
      localStorage.setItem('cuba_layout', state.root.queryParams['layout'] ? state.root.queryParams['layout'] : 'light')
      localStorage.setItem('cuba_type', state.root.queryParams['type'] ? state.root.queryParams['type'] : 'ltr')
      this.router.navigate(['/auth/login']);
      return true
    }
    else if (user) {
      if (!Object.keys(user).length) {
        localStorage.setItem('cuba_layout', state.root.queryParams['layout'] ? state.root.queryParams['layout'] : 'light')
        localStorage.setItem('cuba_type', state.root.queryParams['type'] ? state.root.queryParams['type'] : 'ltr')
        this.router.navigate(['/auth/login']);
        return true
      }
    }
    return true
  }
  
}
