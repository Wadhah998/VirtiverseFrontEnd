import { Component } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import { Router } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})


export class LoginComponent {

  loginObj: any = {
    "email": "",
    "password": ""
  }



  constructor(private userSrv: UserService ,private router: Router , private snackbar : MatSnackBar ) {

  }


  login() {
    console.log(this.loginObj);
    this.userSrv.onLogin(this.loginObj).subscribe((res:any)=> {
      console.log(res);
      this.Snackbar();
   
      if(res.statusCode==200) {
       // localStorage.setItem('angular17TokenData', JSON.stringify(res.data));
       // localStorage.setItem('angular17TokenEmail', res.data.emailId);
         
       // localStorage.setItem('angular17TokenUserId', res.data.userId);
       console.log(res.token);
       localStorage.setItem('token', JSON.stringify(res.token));
         localStorage.setItem('angular17TokenUserId', res.id);
         localStorage.setItem('angular17TokenEmail', res.email);
         localStorage.setItem('name', res.name);
         localStorage.setItem('image', res.image);
         localStorage.setItem('role', res.role);

         console.log("connected");
         
         
         console.log( localStorage.getItem('angular17TokenUserId'));


         if(res.role=="ADMIN"){
          this.router.navigate(['/admin']);

         } else if (res.role=="USER"){
          this.router.navigate(['/user']);
         }

        

         


       console.log("ahlaaa");
       
      
      } else {
        alert(res.error)
      }
    },error=>{
      alert("Wrong Credentials")
    })
  }


  Snackbar(){
    this.snackbar.open('login successful','close',{
      duration :3000
    })
  }
}
