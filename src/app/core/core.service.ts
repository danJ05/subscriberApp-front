import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Objectif } from '../shared/Models/Objectif';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

 baseUrl = environment.apiURL;

  constructor(private http : HttpClient) { }


  getObjectif():Observable<Objectif[]>
  {
    return this.http.get<Objectif[]>(this.baseUrl + 'Phase/getAllPhases');
  }

  TotalSouscripteur():Observable<any>
  {
    return this.http.get<any>(this.baseUrl +'Souscripteur/nombreDeSouscripteur');
  }
}
