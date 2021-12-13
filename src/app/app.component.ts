import {Component} from '@angular/core';
import { PolicyListService, Policy, Schedule, Condition,Fleet } from './policyservice';
import { LazyLoadEvent } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import {MessageService} from 'primeng/api';
import {DividerModule} from 'primeng/divider';
import {BadgeModule} from 'primeng/badge';
import { TagModule } from 'primeng/tag';
import {ButtonModule} from 'primeng/button';
import {MenuItem} from 'primeng/api';
import * as Global from './global-variables';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService],
  styleUrls: ['./app.component.css'],
  styles: [`
        :host ::ng-deep  .row-not-imported {
            background-color: rgb(238, 254, 255) !important;
            disabled: true;
        }`,  "../node_modules/quill/dist/quill.core.css", "../node_modules/quill/dist/quill.snow.css"]
})


export class AppComponent { 

    page: string = 'blank';
    blankScreen: boolean = true;
    policies: Policy[];
    mainMenu: MenuItem[];
    fleet: Fleet[];

    
    constructor(private PolicyListService: PolicyListService) { }



    ngOnInit() {
        this.mainMenu = [
            {label: 'Naujas', icon: 'pi pi-fw pi-plus'},
            {label: 'Paieška', icon: 'pi pi-fw pi-search'}
        ];

        this.fleet = [
            {number: 'PARK 00002', issueDate: '2021-06-19', startDate: '2021-07-04', endDate: '2022-07-03', policyholder: 'TRANSPORTO DIEVAI',policyholderCode:'10002002', numberOfObjects: 15, numberOfCurrentObjects: 14},
            {number: 'PARK 00004', issueDate: '2021-07-28', startDate: '2021-08-12', endDate: '2022-08-11', policyholder: 'TRANSPORTO PASLAUGOS',policyholderCode:'50055005', numberOfObjects: 150, numberOfCurrentObjects: 123}
        ];
    }

    ShowPage(pageName: string){
        this.page = pageName;
    }

}
