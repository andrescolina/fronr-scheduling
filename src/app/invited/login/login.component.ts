import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from 'src/app/components/loading/loading.service';
import { InterfaceUser } from 'src/app/shared/interface/interface';
import { UserService } from 'src/app/shared/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public submit: boolean = false;
  public registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _user: UserService,
    private _loading: LoadingService,
    private _toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

  }
  public get form() { return this.registerForm.controls; }


  public onSubmit() {
    this.submit = true;
    if (this.registerForm.invalid) {
      return;
    }
    else {
      this._loading.setLoading(true);
      let data: InterfaceUser = this.registerForm.value;
      this._user.loginUser(data)
        .subscribe(
            (res) => {
              this.submit = false;
              this.registerForm.reset();
              this._loading.setLoading(false);
              this.router.navigate(['/modules/profile']);
            },
            (err) => {
              this.submit = false;
              this._loading.setLoading(false);
              this._toastr.error('No se encontraron las credenciales proporcionadas', 'Error', { positionClass: 'toast-bottom-right' });
              this.registerForm.reset();
            }

        )

      
      
    }

  }

}
