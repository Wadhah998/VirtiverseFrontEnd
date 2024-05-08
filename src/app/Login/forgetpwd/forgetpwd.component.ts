import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { duration } from 'moment';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-forgetpwd',
  templateUrl: './forgetpwd.component.html',
  styleUrls: ['./forgetpwd.component.css']
})
export class ForgetpwdComponent {

  email: string = '';
  successMessage: string = '';
  errorMessage: string = '';
  constructor(private authService : UserService , private Snackbar:MatSnackBar ){}
  forgotPassword() {
    this.authService.forgotPassword(this.email).subscribe(
      (response) => {
        this.successMessage = response.message;
        this.errorMessage = 'invalid email';
        this.snackbar1();
      },
      (error) => {
        this.errorMessage = error.error.message;
        this.successMessage = 'message sent';
        this.snackbar();
      }
    );
  }
  snackbar(){
    this.Snackbar.open('user do not exist','close',{
      duration :3000
    })
  }
  snackbar1(){
    this.Snackbar.open('mail send successfuly','close',{
      duration :3000
    })
  }

}
