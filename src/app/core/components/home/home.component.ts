import { Component, OnInit } from '@angular/core';

import { Objectif } from 'src/app/shared/Models/Objectif';
import { CoreService } from '../../core.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

constructor(private coreService : CoreService){}

 objectif : Objectif[] = [];
 countSouscripteur: any ;

  ngOnInit(): void {
    this.loadObjectif();
  }

  loadObjectif():void 
  {
    this.coreService.getObjectif().subscribe({
      next: (obj ) => {
        this.objectif = obj,
        this.nbreSouscripteur();
      },
      error: err => {
        console.error('Une erreur s\'est produite :',err);
      }
    })
  }

  nbreSouscripteur():void
  {
    this.coreService.TotalSouscripteur().subscribe({
      next:(counter) => {
        this.countSouscripteur = counter;
      },
      error:err =>{
        console.error('Une erreur s\'est produite : ', err);
      }
    })
  }



}
