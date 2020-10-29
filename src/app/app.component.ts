import { Component, ElementRef, ViewChild } from '@angular/core';
import { TLoadingConf } from './components/loading/loading.component';
import { User } from './shared/interface/interface';
import { NavService } from './shared/services/nav.service';
import { UserService } from './shared/services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  @ViewChild('appDrawer') appDrawer: ElementRef;
  
  public user: User | undefined = undefined;
  public stateUser: boolean = false;

  public loading_conf: TLoadingConf = {
    style: { color: '#fff', 'background-color': 'rgba(0, 0, 0, 0.5)', position: 'fixed' }
  };


  constructor(
    private navService: NavService,
    private _user: UserService
  ) {
  }

  ngOnInit(): void {
    
    this._user.getUser.subscribe((user) => {
      user ? this.stateUser = true : this.stateUser = false;
      this.user = user;
    });

    this._user.populate();

  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

}
