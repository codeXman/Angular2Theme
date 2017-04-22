import { Component, Input,Output, EventEmitter,OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';
import { Http, Response } from '@angular/http';

import {TranslateService} from 'ng2-translate/ng2-translate';
import { SimpleNotificationsModule, NotificationsService} from 'angular2-notifications/components';

import { Account } from 'app/apps/accounting/account';

@Component({
  selector: 'acc-dialog',
  templateUrl: './accountPup.component.html',
  styleUrls: ['./accountPup.component.scss']
})
export class AccountPupComponent {
public form: FormGroup;
  dialogRef: MdDialogRef<AccountListComponent>;
  lastCloseResult: string;
  @Input()
  numAccount:string;
  @Input()
  libelle: string ;
  account:Account=new Account('','');
  
  
  @Output()
  changeNumCompte = new EventEmitter<Account>();
  
 
 
  config: MdDialogConfig = {
    disableClose: false,
    width: '',
    height: '',
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  };
  
  
  fireNumCompte() {
	  
	  this.account.libelle=this.libelle;
	  this.account.numAccount=this.numAccount;
      this.changeNumCompte.emit(this.account);
  }

  constructor(public dialog: MdDialog,private fb: FormBuilder,translate: TranslateService,private _service: NotificationsService) {
	   this.form = this.fb.group({
      libelle: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      numAccount:''
	  
  })
  

  
      this.form.controls['numAccount'].valueChanges.subscribe(function (value) {
       	this.form.patchValue({libelle: ''});
		this.numAccount='';
		this.libelle='';
		if(value.length == 6){
			//this._service.error('err',value.length);
			this._service.alert(this.title, this.content);
			 const req = new XMLHttpRequest();
			 req.open('GET', `http://diffter.com/creditAJS/secure/isAccountValide?numCompte=`+value);

    req.onload = () => {
		this.form.patchValue({libelle: JSON.parse(req.response)['libelle']});
		this.numAccount=value;
		this.libelle=JSON.parse(req.response)['libelle'];
		this._service.error('err','eee');
		
		this.fireNumCompte();
		//alert(''+JSON.parse(req.response)['libelle']);
		
     // cb(JSON.parse(req.response));
    };

    req.send();
		}
		
			
    }.bind(this));
  
  }

  open() {
    this.dialogRef = this.dialog.open(AccountListComponent, this.config);
    this.dialogRef.afterClosed().subscribe(result => {
      this.lastCloseResult = result;	 
	 
	    this.numAccount=this.lastCloseResult[0]['numAccount'];
         this.libelle=this.lastCloseResult[0]['libelle'];
		 this.form.patchValue({libelle: this.libelle, numAccount: this.numAccount});
		 this.dialogRef = null;
	     this.fireNumCompte();
    });
	
	
  }
  
  
  
}

@Component({
  selector: 'app-compte-dialog',
   templateUrl: './accountListPup.component.html',
    styleUrls: ['./auto-account.component.scss']
  
 
})
export class AccountListComponent implements OnInit{
	
	selected: any[] = [];
	mond=MdDialogRef;
	
	
	 rows = [];
  count = 0;
  offset = 0;
  limit = 7;

  ngOnInit() {
    this.page(this.offset, this.limit);
  }
  

  page(offset, limit) {
    this.fetch((results) => {
      this.count = results.length;

      const start = offset * limit;
      const end = start + limit;
      const rows = [...this.rows];

      for (let i = start; i < end; i++) {
        rows[i] = results[i];
      }

      this.rows = rows;
      console.log('Page Results', start, end, rows);
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
   // req.open('GET', `assets/data/company.json`);
	 req.open('GET', `http://diffter.com/creditAJS/admin/listAllAccounts`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  onPage(event) {
    console.log('Page Event', event);
    this.page(event.offset, event.limit);
  }

  
   onSelect(event) {
	     let x=this.getSelectedIx();	  
	     console.log('Event: select', event, this.selected);
		this.dialogRef.close(this.selected);
  }

  onActivate(event) {
		   alert('activate value ');
	  
    console.log('Event: activate', event);
  }
  jazzMessage = 'Jazzy jazz jazz'
  constructor(public dialogRef: MdDialogRef <AccountListComponent> ) {}
  
   getSelectedIx() {
	
    return this.selected[0]['$$index'];
  }
}
