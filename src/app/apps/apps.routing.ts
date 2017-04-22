import { Routes } from '@angular/router';

import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { MediaComponent } from './media/media.component';
import { MailComponent } from './mail/mail.component';
import { SocialComponent } from './social/social.component';
import { ChatComponent } from './chat/chat.component';
import { AccountCreateCompComponent } from './accounting/account-create-comp.component';
import { ListAccountComponent } from './accounting/list-account/list-account.component';
import { ListoperationComponent } from './operation/listoperation/listoperation.component';
import { OperationComponent } from './operation/operation.component';
import { EtatComponent  } from './accounting/etat-account/etat.component';
export const AppsRoutes: Routes = [{
  path: '',
  children: [
  {
    path: 'accountnumcreate',
    component: AccountCreateCompComponent
  },
  {
    path: 'listAccount',
    component: ListAccountComponent
  },
  {
    path: 'createOperation',
    component:  OperationComponent
  },
  {
    path: 'etatCompte',
    component:   EtatComponent
  },
  {
    path: 'listOper',
    component:   ListoperationComponent
  },
 
  {
    path: 'calendar',
    component: FullcalendarComponent
  }, {
    path: 'messages',
    component: MailComponent
  }, {
    path: 'media',
    component: MediaComponent
  }, {
    path: 'chat',
    component: ChatComponent
  }, {
    path: 'social',
    component: SocialComponent
  }]
}];
