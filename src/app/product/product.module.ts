import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MdIconModule,
  MdCardModule,
  MdInputModule,
  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule,
  MdTabsModule,
  MdListModule,
  MdSlideToggleModule,
  MdSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DatepickerModule } from 'angular2-material-datepicker';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

import { ProductRoutes } from './product.routing';
import { SellGoodsComponent } from './sell-goods/sell-goods.component';
import { BuyGoodsComponent } from './buy-goods/buy-goods.component';
// import { EditComponent } from './edit/edit.component';
// import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProductRoutes),
    TranslateModule,
    MdIconModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdTabsModule,
    MdListModule,
    MdSlideToggleModule,
    MdSelectModule,
    FlexLayoutModule,
    FormsModule,
    NgxDatatableModule,
    Ng2FilterPipeModule,
    DatepickerModule
  ],
  declarations: [
    SellGoodsComponent,
    BuyGoodsComponent
  ]
})

export class ProductModule {}
