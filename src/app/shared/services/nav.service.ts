import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  public appDrawer: any;

  constructor() { }

  public closeNav() {
    this.appDrawer.close();
  }

  public openNav() { 
    console.log('Entrooo');
    
    this.appDrawer.open();
  }

}
