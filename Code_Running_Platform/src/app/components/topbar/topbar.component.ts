import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {

  constructor(private userService:UserService, private router:Router) {}

  ngOnInit(): void {
    //if the user is not logged in
    if(this.userService.user == undefined){
      let str = localStorage.getItem('user');
      if(str != null){
        this.userService.user = JSON.parse(str);
      }
      else{
        //then we redirect him to the login page
        this.router.navigate(['/login']);
      }
    }
  }
}
