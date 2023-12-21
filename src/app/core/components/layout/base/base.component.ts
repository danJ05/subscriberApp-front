import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/features/authentification/auth.service';


@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {


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
