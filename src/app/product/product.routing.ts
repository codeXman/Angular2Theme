import { Routes } from '@angular/router';

import { SellGoodsComponent } from './sell-goods/sell-goods.component';
import { BuyGoodsComponent } from './buy-goods/buy-goods.component';
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
    , {
      path: 'buy-goods',
      component: BuyGoodsComponent
    }
    // , {
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
