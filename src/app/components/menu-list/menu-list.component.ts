import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modules } from 'src/app/shared/interface/interface';
import { UserService } from 'src/app/shared/services/user.service';
import { LoadingService } from '../loading/loading.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  @Input() items: Modules;
  constructor(
    private _user: UserService,
    private _loading: LoadingService,
    public _router: Router
  ) { }

  ngOnInit(): void {
  }

  public logout() {
    this._loading.setLoading(true);
    this._user.logout(true)
      .then(() => {
        this._router.navigate(['/invited/login']);
        this._loading.setLoading(false);
      })

  }

  public navTo(path: string) {
    this._router.navigate([path]);
  }

}
