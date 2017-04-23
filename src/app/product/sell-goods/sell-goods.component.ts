import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
// import {FormsModule} from '@angular/forms';
// import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
  selector: 'app-sell-goods',
  templateUrl: './sell-goods.component.html',
  styleUrls: ['./sell-goods.component.scss']
})


export class SellGoodsComponent implements OnInit {

  // public translate: TranslateService;
  date = new Date();

  constructor(public translate: TranslateService) {
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
  	quality : 1,
  	// options : DatePickerOptions,
  	accountNumber : '',
  	detail : ''
  };
}
