import { Component, OnInit } from '@angular/core';
import { AuthService } from './authentification/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SouscriptionApp';

  constructor(private auth : AuthService){}

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser()
  {
    const user = localStorage.getItem('user');
    if (!user) return ; 
    this.auth.setCurrentUser(JSON.parse(user))

  }
}
