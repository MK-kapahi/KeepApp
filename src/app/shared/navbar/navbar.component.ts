import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
constructor(private route : Router){}

logOut()
{
 localStorage.clear();
 this.route.navigateByUrl("/auth/login")
}

changePass()
{
  this.route.navigateByUrl("/auth/change")
}

showSidebar()
{
  
}
}
