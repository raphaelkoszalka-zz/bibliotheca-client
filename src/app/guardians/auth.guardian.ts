import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const tolkien: string = localStorage.getItem('TOLKIEN');
    console.log('- passing through guard;');

    if (!tolkien) {
      alert('- shopping cart available for logged users only.');
      console.log('user isn\'t authenticated');
      this.router.navigate(['home']);
      return false;
    }

    console.log('- user authenticated, allow access to shopping cart');
    return true;
  }

}
