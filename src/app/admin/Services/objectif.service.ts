import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Objectif } from 'src/app/shared/Models/Objectif';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ObjectifService {

  baseUrl = environment.apiURL;
 
  constructor(private http: HttpClient) { }


  getAllObjectif():Observable<any[]>
  {
    return this.http.get<Objectif[]>(this.baseUrl + 'Phase/getAllphases')
  }

  addnewObjectif(obj : Objectif): Observable<Objectif[]>
  {
    return this.http.post<Objectif[]>(this.baseUrl + 'Phase/createPhase', obj)
  }

  getPhasebyId(id : string):Observable<Objectif>{
    return this.http.get<Objectif>(this.baseUrl+'Phase/getAllByProject/' + id);
  }


}
