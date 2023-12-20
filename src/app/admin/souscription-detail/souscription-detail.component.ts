import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscriber } from 'src/app/shared/Models/Subscriber';
import { SouscriptionService } from 'src/app/souscription/souscription.service';

@Component({
  selector: 'app-souscription-detail',
  templateUrl: './souscription-detail.component.html',
  styleUrls: ['./souscription-detail.component.css']
})
export class SouscriptionDetailComponent implements OnInit {

  @Input() souscripteur !: Subscriber;
  constructor(private subscriberService : SouscriptionService, private route : ActivatedRoute , public activeModal: NgbActiveModal){}

  ngOnInit(): void {
    
  }

}
