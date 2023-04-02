import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  constructor(private fb: FormBuilder, public userService:UserService, private router:Router) { }

  createAccountForm = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]]
  });

  create(){
    this.userService.createAccount(this.createAccountForm.value).then((res:any)=>{
      console.log(res);
      //if there is no error then the creation of the account is successful
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
