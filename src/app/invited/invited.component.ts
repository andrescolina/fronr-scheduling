import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-invited',
  templateUrl: './invited.component.html',
  styleUrls: ['./invited.component.scss']
})
export class InvitedComponent implements OnInit {

  constructor(
    private _user: UserService,
    private _router: Router
  ) {
    
    if(this._user.userExists) {
      this._router.navigate(['/modules'])
    }
   }

  ngOnInit(): void {
  }

}
