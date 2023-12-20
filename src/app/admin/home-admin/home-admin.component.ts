import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentification/auth.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  username: string | null = null;

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    this.username = user.username;
  }

  constructor(private auth: AuthService , private router : Router){}

  logout():void {

    this.auth.logout();
    this.router.navigateByUrl('/');
    
  }

  
}
