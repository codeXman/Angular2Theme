import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TreeModule } from 'angular2-tree-component';
import { FormBuilder,ReactiveFormsModule, FormGroup, FormsModule,Validators, FormControl } from '@angular/forms';
//import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { HttpModule, Http } from '@angular/http';
//import { angular2-notifications } from 'node_modules/angular2-notifications';
//import {PushNotificationsModule,SimpleNotificationsModule}  from 'angular2-notifications';
import { SimpleNotificationsModule, NotificationsService} from 'angular2-notifications/components';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { BrowserModule} from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

/*
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}
*/
import {
  MdToolbarModule,
  MdIconModule,
  MdCardModule,
  MdInputModule,   
  MdButtonModule,
  MdButtonToggleModule,
  MdListModule, MdGridListModule,
  MdMenuModule,
  MdSidenavModule,
  MdProgressBarModule,
  MdTabsModule,
  MdSelectModule,
  MdRadioModule,  
  MdDialogModule,
  MaterialModule
  ,
  MdDialog, MdDialogRef, MdDialogConfig 

  

  } from '@angular/material';

import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppsRoutes } from './apps.routing';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { MailComponent } from './mail/mail.component';
import { MediaComponent } from './media/media.component';
import { ChatComponent } from './chat/chat.component';
import { SocialComponent } from './social/social.component';
import { SharedModule } from '../shared/shared.module';
import { AccountCreateCompComponent } from './accounting/account-create-comp.component';
import { ListAccountComponent } from './accounting/list-account/list-account.component';
import { OperationComponent } from './operation/operation.component';
import { AutoAccountComponent } from './accounting/auto-account/auto-account.component';
import { DialogComponent} from './accounting/auto-account/dialog.component';
import { DialogsService } from './accounting/auto-account/dialogs.service';
import { AccountPupComponent } from './accounting/auto-account/accountPup.component';
import { ListoperationComponent } from './operation/listoperation/listoperation.component';
import { EtatComponent  } from './accounting/etat-account/etat.component';
import { NotComponent  } from './accounting/Not/notif';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { Ng2CompleterModule } from "ng2-completer";

@NgModule({
  imports: [
   
    
    CommonModule,
	MaterialModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
   	FlexLayoutModule,
    SharedModule,	
    RouterModule.forChild(AppsRoutes),
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdInputModule,
	MdRadioModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdListModule,
    MdGridListModule,
    MdMenuModule,
    MdSidenavModule,
    MdProgressBarModule,
    MdTabsModule,
    MdDialogModule,
    CalendarModule.forRoot(),  
    ChartsModule,

	MdSelectModule,
	TreeModule,	
	//MdDialog,
	/* TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),*/
	
 
    NgxDatatableModule,
     Ng2CompleterModule,	
	Ng2AutoCompleteModule
	
     //MdDialog
	 //, MdDialogRef, MdDialogConfig
   
    
  ]
  ,
    providers: [
       DialogsService
    ],
	
  declarations: [
    FullcalendarComponent,
    MailComponent,
    MediaComponent,
    ChatComponent,
    SocialComponent,
    AccountCreateCompComponent,
	ListAccountComponent,
	OperationComponent,
	AutoAccountComponent,
	DialogComponent
	,AccountPupComponent,
	ListoperationComponent,
	EtatComponent
  ]
 
})

export class AppsModule {
	public options = {
    position: ["bottom", "left"],
    timeOut: 5000,
    lastOnBottom: true
   
}
	
	
}
