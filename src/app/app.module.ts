import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import { AppComponent }   from './app.component';
;import { PolicyListService } from './policyservice';
import { NewFleetComponent } from './new-fleet/new-fleet.component';
import { OpenFleetComponent } from './open-fleet/open-fleet.component';
import { FleetInfoComponent } from './fleet-info/fleet-info.component';

import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {DividerModule} from 'primeng/divider';
import {BadgeModule} from 'primeng/badge';
import { TagModule } from 'primeng/tag';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ToolbarModule} from 'primeng/toolbar';
import {TabViewModule} from 'primeng/tabview';
import {MenubarModule} from 'primeng/menubar';
import {SplitterModule} from 'primeng/splitter';
import { Variables } from './global-variables';
import {MenuModule} from 'primeng/menu';
import {TooltipModule} from 'primeng/tooltip';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { ChipModule } from 'primeng/chip';
import {EditorModule} from 'primeng/editor';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule,
    ToggleButtonModule,
    DividerModule,
    BadgeModule,  MenubarModule,
    TagModule, SplitButtonModule, ToolbarModule, TabViewModule,SplitterModule,MenuModule,TooltipModule,InputTextareaModule,ChipModule,EditorModule,
    RouterModule.forRoot([
      {path:'',component: AppComponent}

		])
  ],
  declarations: [ AppComponent, NewFleetComponent, OpenFleetComponent, FleetInfoComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PolicyListService, Variables]
})

export class AppModule { }
