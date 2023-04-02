import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FiddleService } from 'src/app/services/fiddle.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public fiddleService:FiddleService, public userService:UserService, private router:Router) { }

  create(){
    this.fiddleService.newFiddle().then((res:any)=> {
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    });
  }

}
