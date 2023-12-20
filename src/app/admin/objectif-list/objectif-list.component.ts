import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Table } from 'primeng/table';
import { Objectif } from 'src/app/shared/Models/Objectif';
import { ObjectifService } from '../Services/objectif.service';

@Component({
  selector: 'app-objectif-list',
  templateUrl: './objectif-list.component.html',
  styleUrls: ['./objectif-list.component.css']
})
export class ObjectifListComponent implements OnInit{

  obj !: Objectif[];
  table: any;

  constructor(private toasrt : ToastrService, private objService : ObjectifService) {}
  ngOnInit(): void {
    
    this.getAllObjectif();
  }

  clear(table: Table) {
    table.clear();
  }

  getAllObjectif():void
  {
    this.objService.getAllObjectif().subscribe({
      next:(response) => {
        this.obj = response,
        console.log(response)
      },
      error: ()=> {
        this.toasrt.error("Une erreur s'\est produite ")
      }
    })
  }
}
