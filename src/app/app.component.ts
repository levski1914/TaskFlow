import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private userService:UserService){}

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }
  logOut(){
    this.userService.logout();
  }
  title = 'TaskFlow';
}
