import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { UserService } from '../user.service';
import { LoadingService } from 'src/app/components/loading/loading.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private _user: UserService,
    private _loading: LoadingService,
    private _router: Router
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let headers;
    let newHandler = next.handle(req);
    
    
    if(this._user.userExists) {
  
      headers = {
        'Authorization': 'Token ' + this._user.user.token,
      }
      newHandler = next.handle(req.clone({
        headers: new HttpHeaders(headers)
      }));

    }
    
    return newHandler.pipe(
      catchError((err: HttpErrorResponse) => {
        this._loading.setLoading(true);
        if (err.status == 401) {
          this._user.logout(false)
            .then(() => {
              this._router.navigate(['/invited/login']);
              this._loading.setLoading(false);
            })
        }
        return throwError(err);
      })
    );
  }
}
