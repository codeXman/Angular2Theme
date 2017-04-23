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

import { ProductRoutes } from './product.routing';
import { SellGoodsComponent } from './sell-goods/sell-goods.component';
// import { InvoiceComponent } from './invoice/invoice.component';
// import { TimelineComponent } from './timeline/timeline.component';
// import { EditComponent } from './edit/edit.component';
// import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProductRoutes),
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
    DatepickerModule
  ],
  declarations: [
    SellGoodsComponent
  ]
})

export class ProductModule {}
