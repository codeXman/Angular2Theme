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
  MdSelectModule,
  MdProgressSpinnerModule,
  MdSnackBarModule,
  MdDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DatepickerModule } from 'angular2-material-datepicker';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

import { ProductRoutes } from './product.routing';
import { SellGoodsComponent } from './sell-goods/sell-goods.component';
import { BuyGoodsComponent } from './buy-goods/buy-goods.component';
import { AccountListDialog } from './dialog/account-list/account-list-dialog.component';
import { ProductListDialog } from './dialog/product-list/product-list-dialog.component';
import { SearchProgressDialog } from './dialog/search-progress/search-progress-dialog.component';

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
    MdProgressSpinnerModule,
    MdDialogModule,
    FlexLayoutModule,
    FormsModule,
    NgxDatatableModule,
    Ng2FilterPipeModule,
    // UserNameSearchDialog,
    DatepickerModule
  ],
  declarations: [
    SellGoodsComponent,
    BuyGoodsComponent,
    AccountListDialog,
    ProductListDialog,
    SearchProgressDialog
  ],
  entryComponents : [
    AccountListDialog,
    ProductListDialog,
    SearchProgressDialog
  ]
})

export class ProductModule {}
