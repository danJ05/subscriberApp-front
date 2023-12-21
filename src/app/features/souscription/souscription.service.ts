import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { Subscriber } from 'src/app/shared/Models/Subscriber';

@Injectable({
  providedIn: 'root'
})
export class SouscriptionService {

  baseUrl = environment.apiURL;

  constructor(private http: HttpClient) { }


  addSouscripteur(subscriber: Subscriber): Observable<Subscriber> {
    return this.http.post<Subscriber>(this.baseUrl + 'Souscripteur/addSouscripteur', subscriber);
  }

  getListSouscripteur(): Observable<any> {
    return this.http.get(this.baseUrl + 'Souscripteur/listeDesSouscripteur');
  }

  getSouscripteur(id: string): Observable<Subscriber> {
    return this.http.get<Subscriber>(this.baseUrl + 'Souscripteur/getSouscripteur/' + id);
  }
}
