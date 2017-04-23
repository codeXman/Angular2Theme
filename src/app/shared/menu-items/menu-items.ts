import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type?: string;
  icon?: string;
  badge?: BadgeItem[];
  children?: Menu[];
}

const MENUITEMS = [
  {
    state: 'accounts',
    name: 'ACCOUNTS',
    type: 'sub',
    icon : 'account_circle',
    children : [
      {state : 'createAnAccount', name : 'CREATE AN ACCOUNT'},
      {state : 'accountStatus', name : 'ACCOUNT STATUS'},
      {state : 'listOfAccounts', name : 'LIST OF ACCOUNTS'},
      {state : 'pastOperations', name : 'PAST OPERATIONS'}
    ]
  }
  ,{
    state: 'daily',
    name: 'DAILY',
    type: 'sub',
    icon : 'date_range',
    children: [
      {state: 'recordingProcess', name: 'REGISTRATION PROCESS'},
      {state: 'todaysOperation', name: "TODAY'S OPERATION"},
      {state: 'fundDiary', name: 'FUND DIARY'},
      {state: 'archiveDiary', name: 'ARCHIVE DIARY'}
    ]
  }
  ,{
    state: 'transactions',
    name: 'TRANSACTIONS',
    type: 'sub',
    icon : 'attach_money',
    children: [
      {state: 'listOfClaims', name: 'LIST OF CLAIMS'},
      {state: 'listAlmdionon', name: "LIST ALMDIONON"}
    ]
  }
  ,{
    state: 'users',
    name: 'USERS',
    type: 'sub',
    icon : 'groups',
    children: [
      {state: "createANewUser", name: "CREATE A NEW USER"},
      {state: "listOfUsers", name: "LIST OF USERS"},
      {state: "copyInformation", name: "COPY INFORMATION"},
      {state: "remoteInformationStorage", name: "REMOTE INFORMATION STORAGE"},
    ]
  }
  ,{
    state: 'product',
    name: 'PRODUCTS',
    type: 'sub',
    icon : 'shop',
    children: [
      {state: "sell-goods", name: "SELLING GOODS"},
      {state: "buy-goods", name: "BUY GOODS"},
      {state: "invoices", name: "INVOICES", },
      {state: "product", name: "PRODUCT"},
      {state: "accessDelivery", name: "ACCESS DELIVERY"},
      {state: "correctQuantityOfGoods", name: "CORRECT QUANTITY OF GOODS"},
      {state: "display", name: "DISPLAY"},
    ]
  }
  ,{
    state: 'notification',
    name: 'NOTIFICATION',
    type: 'sub',
    icon : 'notifications',
    children: [
      {state: "addAnAlert", name: "ADD AN ALERT"},
      {state: "todaysAlert", name: "TODAY'S ALERT"},
      {state: "futuresAlert", name: "FUTURE'S ALERT"}
    ]
  }
  ,{
    state: 'exit',
    name: 'EXIT',
    type: 'link',
    icon : 'exit_to_app'
  }
  // , {
  //   state: 'apps',
  //   name: 'APPS',
  //   type: 'sub',
  //   icon: 'apps',
  //   badge: [
  //     {type: 'red', value: '5'}
  //   ],
  //   children: [
  //     {state: 'accountnumcreate', name: 'ACCOUNTNUMCREATE'},
  //     {state: 'listAccount', name: 'AccountList'},
  //     {state: 'createOperation', name: 'OPERATION'},
  //     {state: 'etatCompte', name: 'ETATCOMPTE'},
  //     {state: 'listOper', name: 'OPERATIONS'},
  //     {state: 'calendar', name: 'CALENDAR'},    
  //     {state: 'media', name: 'MEDIA'},
  //     {state: 'messages', name: 'MESSAGES'},
  //     {state: 'social', name: 'SOCIAL'},
  //     {state: 'chat', name: 'CHAT'}
  //   ]
  // },
];
// const MENUITEMS = [
//   {
//     state: 'home',
//     name: 'HOME',
//     type: 'link',
//     icon: 'explore'
//   },
//   {
//     state: 'apps',
//     name: 'APPS',
//     type: 'sub',
//     icon: 'apps',
//     badge: [
//       {type: 'red', value: '5'}
//     ],
//     children: [
// 	  {state: 'accountnumcreate', name: 'ACCOUNTNUMCREATE'},
// 	  {state: 'listAccount', name: 'AccountList'},
// 	  {state: 'createOperation', name: 'OPERATION'},
// 	  {state: 'etatCompte', name: 'ETATCOMPTE'},
// 	  {state: 'listOper', name: 'OPERATIONS'},
//       {state: 'calendar', name: 'CALENDAR'},	  
//       {state: 'media', name: 'MEDIA'},
//       {state: 'messages', name: 'MESSAGES'},
//       {state: 'social', name: 'SOCIAL'},
//       {state: 'chat', name: 'CHAT'}
//     ]
//   },
//   {
//     state: 'widgets',
//     name: 'WIDGETS',
//     type: 'link',
//     icon: 'photo'
//   },
//   {
//     state: 'material',
//     name: 'MATERIAL',
//     type: 'sub',
//     icon: 'equalizer',
//     badge: [
//       {type: 'purple', value: '10'}
//     ],
//     children: [
//       {state: 'button', name: 'BUTTON'},
//       {state: 'cards', name: 'CARDS'},
//       {state: 'select', name: 'SELECT'},
//       {state: 'autocomplete', name: 'AUTOCOMPLETE'},
//       {state: 'input', name: 'INPUT'},
//       {state: 'checkbox', name: 'CHECKBOX'},
//       {state: 'radio', name: 'RADIO'},
//       {state: 'toolbar', name: 'TOOLBAR'},
//       {state: 'lists', name: 'LISTS'},
//       {state: 'grid', name: 'GRID'},
//       {state: 'progress', name: 'PROGRESS'},
//       {state: 'tabs', name: 'TABS'},
//       {state: 'switch', name: 'SWITCH'},
//       {state: 'tooltip', name: 'TOOLTIP'},
//       {state: 'menu', name: 'MENU'},
//       {state: 'slider', name: 'SLIDER'},
//       {state: 'snackbar', name: 'SNACKBAR'},
//       {state: 'dialog', name: 'DIALOG'}
//     ]
//   },
//   {
//     state: 'forms',
//     name: 'FORMS',
//     type: 'sub',
//     icon: 'looks_3',
//     children: [
//       {state: 'editor', name: 'EDITOR'},
//       {state: 'validation', name: 'VALIDATION'},
//       {state: 'upload', name: 'UPLOAD'},
//       {state: 'tree', name: 'TREE'},
//     ]
//   },
//   {
//     state: 'tables',
//     name: 'TABLES',
//     type: 'sub',
//     icon: 'format_line_spacing',
//     badge: [
//       {type: 'blue-grey', value: '8'
//       }
//     ],
//     children: [
//       {state: 'fullscreen', name: 'FULLSCREEN'},
//       {state: 'editing', name: 'EDITING'},
//       {state: 'filter', name: 'FILTER'},
//       {state: 'paging', name: 'PAGING'},
//       {state: 'sorting', name: 'SORTING'},
//       {state: 'pinning', name: 'PINNING'},
//       {state: 'selection', name: 'SELECTION'},
//     ]
//   },
//   {
//     state: 'charts',
//     name: 'CHARTS',
//     type: 'link',
//     icon: 'show_chart',
//   },
//   {
//     state: 'maps',
//     name: 'MAPS',
//     type: 'sub',
//     icon: 'navigation',
//     badge: [
//       {type: 'green', value: 'new'
//       }
//     ],
//     children: [
//       {state: 'google', name: 'GOOGLE'},
//       {state: 'leaflet', name: 'LEAFLET'}
//     ]
//   },
//   {
//     state: 'dragndrop',
//     name: 'DND',
//     type: 'link',
//     icon: 'show_chart',
//   },
//   {
//     state: 'pages',
//     name: 'PAGES',
//     type: 'sub',
//     icon: 'pages',
//     children: [
//       {state: 'invoice', name: 'INVOICE'},
//       {state: 'timeline', name: 'TIMELINE'},
//       {state: 'user', name: 'USER'},
//       {state: 'blank', name: 'BLANK'},
//       {state: 'pricing', name: 'PRICING'},
//     ]
//   },
//   {
//     state: 'session',
//     name: 'SESSION',
//     type: 'sub',
//     icon: 'face',
//     children: [
//       {state: '404', name: '404'},
//       {state: 'error', name: 'ERROR'},
//       {state: 'signin', name: 'SIGNIN'},
//       {state: 'signup', name: 'SIGNUP'},
//       {state: 'forgot', name: 'FORGOT'},
//       {state: 'lockscreen', name: 'LOCKSCREEN'},
//     ]
//   },
//   {
//     state: 'http://primer.nyasha.me/docs',
//     name: 'DOCS',
//     type: 'extTabLink',
//     icon: 'local_library'
//   }
// ];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  // add(menu: Menu) {
  //   MENUITEMS.push(menu);
  // }
}
