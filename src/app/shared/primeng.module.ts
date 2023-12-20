import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule } from 'primeng/password';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';


@NgModule({
  
  exports:[
    ButtonModule,
    TableModule,
        InputTextModule,
        RadioButtonModule,
        CalendarModule,
        InputMaskModule,
        DropdownModule,
        PasswordModule,
        DynamicDialogModule,
        DialogModule,
        InputNumberModule,
        InputTextareaModule,
        CheckboxModule,
        TabViewModule
  ]
})
export class PrimengModule { }
