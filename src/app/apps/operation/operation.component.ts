import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import 'rxjs/add/operator/startWith';
//import { AccountPupComponent } from 
import { AccountPupComponent } from '../accounting/auto-account/accountPup.component';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import { HttpModule,Headers } from '@angular/http';
//import {SimpleNotificationsModule, NotificationsService} from 'angular2-notifications';
import {NotificationsService, SimpleNotificationsComponent, PushNotificationsService} from 'angular2-notifications';
import {TranslateService} from 'ng2-translate/ng2-translate';
import { Account } from 'app/apps/accounting/account';
import { ViewContainerRef } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';


const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder,private http: Http,private _service:NotificationsService,translate: TranslateService,public snackBar: MdSnackBar) {}
  //constructor(private fb: FormBuilder,private http: Http) {}
  
  ngOnInit() {
    this.form = this.fb.group({
      montant: [null, Validators.compose([Validators.required, CustomValidators.number])],
      name: '',
	  numCompte: '',
      date: ['', Validators.compose([Validators.required, CustomValidators.date])],
      remarque:'',
      type: [null, Validators.compose([Validators.required])]
    });
	this.form.patchValue({date: new Date()});
  }
  
  public static PATH:string = 'http://diffter.com/creditAJS/secure/addMvtTodayOperationAn'; 
     errorMsg: string;	
	 userStatus: string;	
     private data: any;
  
   onSubmit(form: any): void {  
      console.log('you submitted value:', form); 
	this.doSaveAccount();
	
	//console.log(this.vm);
  }
   getNotification(evt) {
	  var ac: Account;
	  ac= evt;
      this.form.patchValue({numCompte: ac.numAccount,name: ac.libelle});
        // Do something with the notification (evt) sent by the child!
    }
	
	showMessage(message:string){
	//	this._service.alert('test','not');
		
	}
	 public title: string = 'just a title';
    public content: string = 'just content';
	 actionButtonLabel = 'Retry';
  action = false;
  setAutoHide = true;
  autoHide = 10000;
  addExtraClass = false;
  message = 'Snack Bar opened.';
   open() {
    const config = new MdSnackBarConfig();
    config.duration = this.autoHide;
    config.extraClasses = this.addExtraClass ? ['party'] : null;
    //this.snackBar.open(this.message, this.action && this.actionButtonLabel, config);
  }
 
  doSaveAccount() {
		this.open();
		//this.show_message('inside');
		//let a = this._service.success(this.title, this.content, {id: 123});
		//alert('erreur los call from angular ');
		//this.withOverride();
		//this.getNotification($event) ;
		
		
	    this.showMessage('test');
       let formData = this.form.value;	 
       let header = new Headers();
	   header.append('Content-Type', 'application/json');
   
   
	this.http.post(OperationComponent.PATH, formData,{headers: header}).map((res:Response) => res.json()).subscribe(
        (data) => {
		//	s._service.alert(this.title, this.content);
	
		this.form=data;
		var message:string=data['message'];		 
		
		this.showMessage('test snk');
		this.showMessage(message);
		alert(message);
		//if(message != null && message !='')
		//{
			//let config1 = new MdSnackBarConfig();
       // this.snackbar.open('message', 'Ok', null);
	     //  config1.duration = 1000;
			// this.snackbar.open("Message", "Action Label", config1);
			//this._service.success('bla', mess);
		 // let config = new MdSnackBarConfig(this.viewContainerRef);
		  // let config = new MdSnackBarConfig(this.viewContainerRef);
		   // let config = new MdSnackBarConfig();
           // this.snackbar.open(message, 'Ok', null);
		//}
		//this.account=data;
		//let mess: string= this.account.message as string;
		//this.show_message("mess");
		//alert(''+mess);
		 //this._service.success('bla', mess);
		  
		
          
        },
        err => alert('erreur los call from angular '+err)// complete
    );
	
	
	
	
  }
  
  onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
}
  
 
}
