import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/startWith';

import { JazzDialogComponent } from './material/dialog/dialog.component';
import { CalendarDialogComponent } from './apps/fullcalendar/fullcalendar.component';
import { AccountListComponent } from './apps/accounting/auto-account/accountPup.component';
import { AccountService } from './apps/accounting/AccountService';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { SharedModule } from './shared/shared.module';
import {  ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// import { SimpleNotificationsModule, NotificationsService} from 'angular2-notifications/components';
import {NotificationsService, SimpleNotificationsComponent, SimpleNotificationsModule,PushNotificationsService} from 'angular2-notifications/components'




export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    JazzDialogComponent,
    CalendarDialogComponent,
	  AccountListComponent
	
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,	
    HttpModule,
    NgxDatatableModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    MaterialModule,
    FlexLayoutModule,
    SimpleNotificationsModule.forRoot(),  
    FormsModule,
    // Including the ReactiveFormsModule in our application
    ReactiveFormsModule
	//,	AccountService
  ],
  providers: [ TranslateModule, NotificationsService,AccountService],
 
  entryComponents: [ JazzDialogComponent, CalendarDialogComponent,AccountListComponent ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
