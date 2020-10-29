import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitedRoutingModule } from './invited-routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InvitedComponent } from './invited.component';


@NgModule({
  declarations: [LoginComponent, InvitedComponent],
  imports: [
    CommonModule,
    InvitedRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class InvitedModule { }
