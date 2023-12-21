import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authForm :FormGroup = this.fb.group({
    username: ['',Validators.required],
    password:['',Validators.required]
  })

  constructor(private fb : FormBuilder, private toasrt : ToastrService, private router : Router, private auth : AuthService){}

  ngOnInit(): void {
  }


  onSend():void{
    this.auth.login(this.authForm.value).subscribe({
      next:(obj) => {
        this.toasrt.success("Connexion réussie");
        setTimeout(() => { 
          this.router.navigateByUrl('/dashboard')
        }, 5000);
      },
      error: err => this.toasrt.error("Connexion echoué ..... vérifiez vos indentifiants")
    })
  }
}
