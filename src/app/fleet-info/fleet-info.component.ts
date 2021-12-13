import { Component, OnInit } from '@angular/core';
import { PolicyListService, Policy, Schedule, Condition } from '../policyservice';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-fleet-info',
  templateUrl: './fleet-info.component.html',
  styleUrls: ['./fleet-info.component.css']
})
export class FleetInfoComponent implements OnInit {
  
  policies: Policy[];
  printMenuItems: MenuItem[];
  actionMenuItems: MenuItem[];
  paymentSchedule: Schedule[];
  parkConditions: Condition[];
  flags: any[];
  panel1: number = 100;
  panel2: number = 0;
  displayADD: boolean = false;
  displayLOG: boolean = false;

  constructor(private PolicyListService: PolicyListService) { }

  displayCRM: boolean = false;
  displayEMAIL: boolean = false;
  showDialogCRM() {
      this.displayCRM = true;
  }

  showDialogEMAIL() {
    this.displayEMAIL = true;
}

  ngOnInit() {
    this.PolicyListService.getPolicyMedium().then(data => {
      this.policies = data
      
  });

 this.printMenuItems = [
      {label: 'Generalinė sutartis', icon: 'pi pi-file-pdf'},
      {label: 'Priedas', icon: 'pi pi-file-pdf'},
      {label: 'Sąskaita', icon: 'pi pi-file-pdf'}
  ];

  this.actionMenuItems = [
      {label: 'Sugadinti', icon: 'pi pi-times'},
      {label: 'Pašalinti iš parko', icon: 'pi pi-minus-circle'},
      {separator: true},
      {label: 'Generuoti sutartis', icon: 'pi pi-spinner'},
  ];

  this.paymentSchedule = [
      {"number":1, "date":'2022-01-01', paymentSum:7600.00, paidSum: 7400}, {number:2, date:'2022-04-01', paymentSum:76000.00, paidSum:0}, {number:3, date:'2022-08-01',paymentSum: 65000.00, paidSum:0},{number:4, date:'2022-12-01',paymentSum: 60000.00, paidSum:0}
  ]
  this.parkConditions = [
      {conditionType: 'Rizikų paketas', insType: 'Lengvieji automobiliai', value:'Bazinis'},
      {conditionType: 'Rizikų paketas', insType: 'Krovininai automobiliai', value:'Super'},
      {conditionType: 'Rizikų paketas', insType: 'Krovininai automobiliai iki 3.5 t', value:'Bazinis'},
      {conditionType: 'Kriterijai', insType: 'Lengvieji automobiliai', ageFrom: 9, ageTo: 50, value:'TP remontas Draudiko pasirinkimu'},
      {conditionType: 'Kriterijai', insType: 'Lengvieji automobiliai', ageFrom: 0, ageTo: 9, value:'TP remontas Draudėjo pasirinkimu'},
      {conditionType: 'Papildomi draudimai', insType: 'Lengvieji automobiliai', value:'Išplėstinė pagalba kelyje, Vairuotojai ir keleveikiai'},
      {conditionType: 'Išskaita', insType: 'Lengvieji automobiliai', value:'50 EUR / 10% vagystei'},
      {conditionType: 'Išskaita', insType: 'Krovininai automobiliai', value:'100 EUR / 10% vagystei'},
      {conditionType: 'Papildomi draudimai', insType: 'Krovininai automobiliai iki 3.5 t', value:'Vairuotojai ir keleiviai'},
      {conditionType: 'Papildomi draudimai', insType: 'Krovininai automobiliai', value:'Vairuotojai ir keleiviai'}
  ]

  this.flags = [
    {name:"Patvirtintas", value: "0", image: "pi-check-circle" },
    {name:"Klaida", value: "1", image: "pi-bell" },
    {name:"Nepatvirtintas", value: "2", image: "pi-circle" }
  ];


  }
  showDialogAddVehicles() {
    this.displayADD = true;
}

showDialogPolisoLogas() {
  this.displayLOG = true;
}

collapseAll() {
 
}

paste(event: ClipboardEvent){
  let clipboardData = event.clipboardData;
  let pastedText = clipboardData.getData('text');
  console.log(pastedText);
}
}