import { Component, Input, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';

export interface TLoadingConf {
  show?: boolean,
  style: object
}

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Input('conf') conf: TLoadingConf = {
    style: {}
  } 

  public show = false;

  constructor(
    private _loading: LoadingService
  ) { }

  ngOnInit(): void {
    this._loading.getLoading.subscribe((value) => {
      this.show = value.show;
    });

  }

}
