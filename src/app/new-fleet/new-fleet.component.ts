import { Component, OnInit } from '@angular/core';
import { PolicyListService, Policy, Schedule, Condition } from '../policyservice';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-new-fleet',
  templateUrl: './new-fleet.component.html',
  styleUrls: ['./new-fleet.component.css']
})
export class NewFleetComponent implements OnInit {

  constructor() { }

  newTabIndex : number = 0;
  parkConditions: Condition[];
  paymentSchedule: Schedule[];
  printMenuItems: MenuItem[];
  ngOnInit() {

    this.parkConditions = [
      {conditionType: 'Draudimo variantas', insType: 'Lengvieji automobiliai', value:'Bazinis'},
      {conditionType: 'Draudimo variantas', insType: 'Krovininai automobiliai', value:'Super'},
      {conditionType: 'Draudimo variantas', insType: 'Krovininai automobiliai iki 3.5 t', value:'Bazinis'},
      {conditionType: 'Įmoka', insType: 'Krovininai automobiliai iki 3.5 t', value:'3% nuo vertės'},
      {conditionType: 'Įmoka', insType: 'Krovininai automobiliai', value:'3% nuo vertės'},
      {conditionType: 'Įmoka', insType: 'Lengvieji automobiliai', value:'3% nuo vertės'},
      {conditionType: 'Papildomos sąlygos', insType: 'Krovininai automobiliai', ageFrom: 0, ageTo: 15, value:'TP remontas Drudėjo pasirinkimu'},
      {conditionType: 'Papildomos sąlygos', insType: 'Lengvieji automobiliai', ageFrom: 9, ageTo: 15, value:'TP remontas Draudiko pasirinkimu'},
      {conditionType: 'Papildomos sąlygos', insType: 'Lengvieji automobiliai', ageFrom: 0, ageTo: 9, value:'TP remontas Draudėjo pasirinkimu'},
      {conditionType: 'Papildomi draudimai', insType: 'Lengvieji automobiliai', value:'Išplėstinė pagalba kelyje, Vairuotojai ir keleveikiai'},
      {conditionType: 'Papildomi draudimai', insType: 'Krovininai automobiliai iki 3.5 t', value:'Vairuotojai ir keleviai'},
      {conditionType: 'Papildomi draudimai', insType: 'Krovininai automobiliai', value:'Vairuotojai ir keleviai'}
  ]

  this.paymentSchedule = [
    {"number":1, "date":'2022-01-01'}, {number:2, date:'2022-04-01'}, {number:3, date:'2022-08-01'},{number:4, date:'2022-12-01'}
]
this.paymentSchedule = [
  {"number":1, "date":'2022-01-01'}, {number:2, date:'2022-04-01'}, {number:3, date:'2022-08-01'},{number:4, date:'2022-12-01'}
]
this.printMenuItems = [
  {label: 'Generalinės sutarties projektas', icon: 'pi pi-file-pdf'}
];

  }


  displayCRM: boolean = false;
 

    showDialogCRM() {
        this.displayCRM = true;
    }



}

