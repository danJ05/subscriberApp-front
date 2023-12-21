import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { users } from './Models/users';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiURL;
  private currentUserSource = new BehaviorSubject<users | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) {
  }

  login(model: any): Observable<any> {
    return this.http.post<users>(this.baseUrl + "Account/login", model).pipe(
      map((response: users) => {
        const admin = response;
        if (admin) {
          localStorage.setItem('user', JSON.stringify(admin))
          this.currentUserSource.next(admin);
        }
      })
    )
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  setCurrentUser (user : users)
  {
    this.currentUserSource.next(user)
  }

  isLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    return !!user; // Vérifie si l'utilisateur existe dans le localStorage
  }
}
