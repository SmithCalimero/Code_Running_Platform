import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb:FormBuilder, public userService:UserService, private router:Router) { }

  loginForm = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(6)]]
  });

  login(){
    this.userService.login(this.loginForm.value).then((res:any)=>{
      console.log(res);
      //if there is no error then the login is successful
      if(!res.error){
        this.userService.user = res.response;
        //we will store the user locally
        localStorage.setItem('user', JSON.stringify(res.response));
        //then we redirect the user to the home page
        this.router.navigate(['/home']);
      }

    }).catch((err)=>{
      console.log(err);
    });
  }
}
