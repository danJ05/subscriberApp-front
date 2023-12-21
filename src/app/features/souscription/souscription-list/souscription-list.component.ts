import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SouscriptionDetailComponent } from '../souscription-detail/souscription-detail.component';
import { Subscriber } from 'src/app/shared/Models/Subscriber';
import { SouscriptionService } from '../souscription.service';

@Component({
  selector: 'app-souscription-list',
  templateUrl: './souscription-list.component.html',
  styleUrls: ['./souscription-list.component.css']
})
export class SouscriptionListComponent {

  souscripteur !: Subscriber[];
  table: any;
  checked: boolean = false;

  constructor(private souscriptionService : SouscriptionService , private modaleService : NgbModal){}
  ngOnInit(): void {
    this.getListSouscription();
  }

  clear(table: Table) {
    table.clear();
  }

  getListSouscription():void {
    this.souscriptionService.getListSouscripteur().subscribe({
      next:(res) => {
        this.souscripteur = res;
        console.log(res);
      },
      error:(error) => console.log('Une erreur s\'est produite', error)
    })
  }

  public open(souscripteur : Subscriber): void {
   const modalRef =  this.modaleService.open(SouscriptionDetailComponent,{size:'lg'});
    modalRef.componentInstance.souscripteur = souscripteur;

  }
}
