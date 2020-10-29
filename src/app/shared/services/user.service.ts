import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { InterfaceUser, User } from '../interface/interface';
import { environment } from 'src/environments/environment';
import { map, take } from 'rxjs/operators';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { NavService } from 'src/app/shared/services/nav.service';
import { rejects } from 'assert';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userBS: BehaviorSubject<User | undefined> = new BehaviorSubject<User>(undefined);
  public user: User;

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();


  constructor(
    private _http: HttpClient
  ) { }

  public populate() {
    const ssesionUser = localStorage.getItem('user');
    if (ssesionUser) {
      this.isAuthenticatedSubject.next(true);
      this.globalUser(JSON.parse(ssesionUser));
    }
    else {
      this.isAuthenticatedSubject.next(false);
    }
  }
  
  public get getUser(): Observable<User> {
    return this.userBS.asObservable();
  }
  
  public globalUser(value: User) {
    this.isAuthenticatedSubject.next(true);
    this.userBS.next(value);
    this.user = value;
    
  }

  public setUser(user: User) {

    this.globalUser(user);  
    localStorage.setItem('user', JSON.stringify(user));
  }

  public get userExists(){
    if (localStorage.getItem('user')){
      return true
    }

    return false
  }

  public loginUser(credentials: InterfaceUser) {
    return this._http.post(`${environment.URLBackend}/login/`, credentials)
      .pipe(
        map((res: User) => {
          this.setUser(res);
          return res;
        })
      );
  }

  public quitUser() {
    this.userExists ? localStorage.removeItem('user') : null
    this.userBS.next(undefined);
    this.user = undefined;
  }
  
  public logout(service: boolean) {
    return new Promise((resolve, reject) => {
      if (service){ 
        this._http.delete(`${environment.URLBackend}/logout/`)
          .subscribe((res) => {
            this.quitUser();
            resolve()}
          );
      }
      else {
        this.quitUser();
      }
    })
  }
  
}
