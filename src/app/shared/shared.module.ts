import { NgModule } from '@angular/core';

import { MenuItems } from './menu-items/menu-items';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';
import { ToggleFullscreenDirective } from './fullscreen/toggle-fullscreen.directive';
import { HttpModule, Http } from '@angular/http';

import { TranslateModule, TranslateLoader, TranslateStaticLoader,TranslateService, TranslatePipe } from 'ng2-translate/ng2-translate';

//import { SimpleNotificationsModule, NotificationsService} from 'angular2-notifications/components';


@NgModule({
	
	
	imports: [
    TranslateModule
  ],
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    ToggleFullscreenDirective
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    ToggleFullscreenDirective,
	TranslateModule,
	//SimpleNotificationsModule, NotificationsService
   ],
  providers: [ MenuItems ]
})
export class SharedModule { }
