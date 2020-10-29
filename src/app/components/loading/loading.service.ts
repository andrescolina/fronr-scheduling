import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public loading: BehaviorSubject<{ show: boolean, msg: string }> = new BehaviorSubject({ show: false, msg: '' });
  
  constructor() { }

  public get getLoading() {
    return this.loading.asObservable();
  }

  public setLoading(show: boolean, msg?: string) {
    this.loading.next({ show: show, msg: msg });
  }
  
}
