import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SouscriptionService } from '../souscription.service';
import { Subscriber } from 'src/app/shared/Models/Subscriber';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-souscription-new',
  templateUrl: './souscription-new.component.html',
  styleUrls: ['./souscription-new.component.css']
})
export class SouscriptionNewComponent {

  forms: FormGroup = this.fb.group({
    pays: ['', Validators.required],
    datePaiement: ['', Validators.required],
    civilite: ['', Validators.required],
    prenoms: ['', Validators.required],
    nom: ['', Validators.required],
    Email: ['', Validators.required],
    lieuHabitation: ['', Validators.required],
    Telephone: ['', Validators.required],
    statutEglise: ['', Validators.required],
    modePaiement: ['', Validators.required],
    cost:['',Validators.required]
  });


  constructor(private fb: FormBuilder,
    private souscriptionService: SouscriptionService,
    private toasrt : ToastrService
  ) {}

  onSend(): void {
    console.log(this.forms.value);
    if (this.forms.valid) {

      const subscriberData: Subscriber = {
        id:'',
        country: this.forms.get('pays')!.value,
        civilite: this.forms.get('civilite')!.value,
        firstName: this.forms.get('prenoms')!.value,
        lastName: this.forms.get('nom')!.value,
        phone: this.forms.get('Telephone')!.value,
        habitation: this.forms.get('lieuHabitation')!.value,
        saroMember: this.forms.get('statutEglise')!.value,
        Email: this.forms.get('Email')!.value,
        donations: [{
          donationMode: this.forms.get('modePaiement')!.value,
          period: this.forms.get('datePaiement')!.value,
          cost:this.forms.get('cost')!.value,
        }]

      };

      this.souscriptionService.addSouscripteur(subscriberData).subscribe({
        next: (obj) => {
          this.toasrt.success("Votre souscription a été effectué avec succès");
          console.log("Abonnement effectué avec succès", obj);
          this.forms.reset();
        },
        error: err => {
          this.toasrt.error("Une erreur s'est produite veuillez réssayer !!");
          console.error('Une erreur s\'est produite :', err);
        }
      })
    }
  }

}
