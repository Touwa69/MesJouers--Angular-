import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JouerGuard implements CanActivate {

  constructor(private authService: AuthService, private router : Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (this.authService.isAdmin())
      return true;
    else{
      this.router.navigate(['app-forbidden']);
      return false;
    }
  }
  
}
