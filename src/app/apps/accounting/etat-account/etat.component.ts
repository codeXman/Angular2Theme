import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import { AccountService } from 'app/apps/accounting/AccountService';
import { Account } from 'app/apps/accounting/account';
import {TranslateService} from 'ng2-translate/ng2-translate';



@Component({
  selector: 'app-autocomplete',
 templateUrl: './etat.component.html',
  styleUrls: ['./etat.component.scss']
})
export class EtatComponent implements OnInit {

  stateCtrl: FormControl;
  currentState = '';
   

  
  reactiveAccounts: any;
  tdAc: any[];

  tdDisabled = false;

  tdAuto: string;

  reactiveAuto: string;
  reactiveAcAuto: string;
  accounts =[];
  
  constructor(private accountSer:AccountService,translate: TranslateService) {
    
    this.stateCtrl = new FormControl({numAccount: '', libelle: ''});
    this.reactiveAccounts = this.stateCtrl.valueChanges
      .startWith(this.stateCtrl.value)
      .map(val => this.displayFn(val))
      .map(libelle => this.filterAccount(libelle));
	  this.stateCtrl.valueChanges.subscribe(data => {
      if(data['numAccount']!=undefined){
		  alert(data['numAccount']);
		  this.getAccountDetail(data['numAccount']);
		 //alert(data['numAccount']);
	  }
    })
	// reactiveAccounts.valueChanges()
	  
  }

  displayFn(value: any): string {
	  this.currentState=value;
    return value && typeof value === 'object' ? value.libelle : value;
  }

   
  filterAccount(val: string) {
    return val ? this.accounts.filter((s) => s.libelle.match(new RegExp(val, 'gi'))) : this.accounts;
  }
  
  
  
  ngOnInit() {
	 
	this.accountSer.getAllAccount().subscribe((data) => {this.accounts=data;});
	
	 this.pageIn(this.offsetIn, this.limitIn);
	this.pageOut(this.offsetOut, this.limitOut);
  }
  
  getAccountDetail(value:any){
	  alert('looking '+value);
	      this.accountSer.getAccountDetail(value).subscribe((data) => {
		  alert(data);
		  this.rows=data;});
	  
  }
  
  
 solde:number=0;
  rows= [];
  count = 0;
  offset = 0;
  limit = 7;
  
  rowsIn= [];
  countIn = 0;
  offsetIn = 0;
  limitIn = 7;
  rowsOut= [];
  countOut = 0;
  offsetOut = 0;
  limitOut = 7;
  


  pageIn(offset, limit) {
    this.fetch((results) => {
      this.countIn = results['inList'].length;

      const start = offset * limit;
      const end = start + limit;
      const rows = [...this.rowsIn];

      for (let i = start; i < end; i++) {
        rows[i] = results['inList'][i];
      }

      this.rowsIn = rows;
      
    });
  }
  
  
  pageOut(offset, limit) {
    this.fetch((results) => {
      this.countOut = results['outList'].length;

      const start = offset * limit;
      const end = start + limit;
      const rows = [...this.rowsOut];

      for (let i = start; i < end; i++) {
        rows[i] = results['outList'][i];
      }

      this.rowsOut = rows;
      
    });
  }

 fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);
	// req.open('GET', `http://diffter.com/creditAJS/secure/listTodayDailyWithSus`);
	
  req.onload = () => {
		var arry=JSON.parse(req.response);
		this.solde=arry['solde'];
      cb(arry);
    };

    req.send();
  }

  onPageIn(event) {
       this.pageIn(event.offset, event.limit);
  }
onPageOut(event) {
       this.pageOut(event.offset, event.limit);
  }

}
