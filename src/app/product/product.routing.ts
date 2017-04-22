import { Routes } from '@angular/router';

import { SellGoodsComponent } from './sell-goods/sell-goods.component';
// import { InvoiceComponent } from './invoice/invoice.component';
// import { TimelineComponent } from './timeline/timeline.component';
// import { EditComponent } from './edit/edit.component';
// import { PricingComponent } from './pricing/pricing.component';

export const ProductRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'sell-goods',
      component: SellGoodsComponent
    }
    // , {
    //   path: 'invoice',
    //   component: InvoiceComponent
    // }, {
    //   path: 'timeline',
    //   component: TimelineComponent
    // }, {
    //   path: 'user',
    //   component: EditComponent
    // }, {
    //   path: 'pricing',
    //   component: PricingComponent
    // }
    ]
  }
];
