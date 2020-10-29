import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { UserService } from '../services/user.service';
import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanLoad {

  constructor(
    private _router: Router,
    private _userService: UserService
  ) { }
  
  
  canLoad(route: Route): Observable<boolean> {
    this._userService.isAuthenticated.pipe(
          take(1)
      ).subscribe((x) => {
    
        if (!x) this._router.navigate(['/invited/login'])
    });
    return this._userService.isAuthenticated.pipe(take(1));

  }


  
}
