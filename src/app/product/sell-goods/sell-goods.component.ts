import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { MdDialog, MdSnackBar } from '@angular/material';
// import {FormsModule} from '@angular/forms';
// import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { AccountListDialog } from '../../product/dialog/account-list/account-list-dialog.component';
import { ProductListDialog } from '../../product/dialog/product-list/product-list-dialog.component';
import { SearchProgressDialog } from '../../product/dialog/search-progress/search-progress-dialog.component';


@Component({
  selector: 'app-sell-goods',
  templateUrl: './sell-goods.component.html',
  styleUrls: ['./sell-goods.component.scss']
})

export class SellGoodsComponent implements OnInit {

  // public translate: TranslateService;
  date = new Date();
  showHeader = true;
  modalConfig = {
    width : '600px'
  }

  product = {
      name : '',
      price : 0,
      quantity : 1,
      total : 0
  };

  quantityTotal = function(){
    this.product.total = this.product.price * this.product.quantity;
  }


  rows = [];
  selecteds = [];
  netTotal = 0;
  tax = 0;
  grandTotal = 0;
  onSelect = function(){

  }
  constructor(public translate: TranslateService, public dialog : MdDialog, public snackBar : MdSnackBar) {
    // console.log("constructor");
    // console.log(translate);
    // translate.use('ar');
  }


  ngOnInit() : void{
    // console.log("on init");
    // console.log(this.translate);
  }

  label = {
    delivered : "Delivered"
  }

  checked = true;
  qualityOfPayments = [{
    value : 1,
    viewValue : 'Cash'
  },{
    value : 2,
    viewValue : 'Debit'
  }];

  customer = {
    name : '',
    isDelivered : true,
    date : '',
    quality : 2,
    // options : DatePickerOptions,
    accountNumber : '',
    detail : ''    
  };

  openDialog = function () {
    //TODO
    // this.dialog.open(UserNameSearchDialog, this.modalConfig);
  }

  openSearchProgressDialog = function(){
    this.dialog.open(SearchProgressDialog, this.modalConfig);
    setTimeout(()=>this.dialog.closeAll(), 1500);
  }

  openListOfAccountDialog = function(){
    //TODO
    let dialogInstance = this.dialog.open(AccountListDialog, this.modalConfig);
      dialogInstance.afterClosed().subscribe(result => {
        console.log(result);
        if(result != null || result != undefined){
          if(result.length > 0)
            this.customer.accountNumber = result[0].accountNumber;
        }
      });

  }
  
  openListOfProductDialog = function(){
    //TODO
    let dialogInstance = this.dialog.open(ProductListDialog, {width : '720px'});
    dialogInstance.afterClosed().subscribe(result => {
        console.log(result);
        if(result != null || result != undefined){
          if(result.length > 0){
            // this.customer.product = result[0].productName;
            // this.customer.quantity = result[0].theExistingQuantity;
            // this.customer.price = result[0].price;
            // this.rows.push(result[0]);
            this.product.name = result[0].productName;
            this.product.price = result[0].price;
            this.product.total = this.product.price * this.product.quantity;
          }

        }
      });
  }

  checkOut = function(){
    if(this.product.name == "")
      this.showSnackBar("Select Product");
    else if(this.product.total == 0){
      this.showSnackBar("Check Quantity or Price, it is not valid");
    }else{
      this.showSnackBar("Product added to Bill");
      this.rows.push({productName : this.product.name, price : this.product.price, quantity : this.product.quantity, total : this.product.total});
      this.product.name = '';
      this.product.price = 0;
      this.product.quantity = 1;
      this.product.total = 0;
      this.netTotal = 0;
      this.grandTotal = 0;
      for (var i = 0; i < this.rows.length; i++) {
         this.netTotal += Object.assign(this.rows[i].total);
         this.grandTotal += Object.assign(this.rows[i].total);
      }
    }
  }

  showSnackBar = function(message: string){
    this.snackBar.open(message,null,{
      duration : '2000'
    })
  }

}

// @Component({
//   templateUrl : './user-name-search-dialog.component.html'
// })
// export class UserNameSearchDialog{}