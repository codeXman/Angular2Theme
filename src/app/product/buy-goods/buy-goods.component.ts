import { Component, OnInit } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
// import { Account } from './account';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule,Headers } from '@angular/http';
//import {SimpleNotificationsModule, NotificationsService} from 'angular2-notifications';
import {NotificationsService, SimpleNotificationsComponent, SimpleNotificationsModule, PushNotificationsService,NotificationComponent} from 'angular2-notifications/components';
import {TranslateService} from 'ng2-translate/ng2-translate';


//import { SimpleNotificationsModule } from 'angular2-notifications';

//import {Headers} from 'angular2/http';

import { CustomValidators } from 'ng2-validation';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'buy-goods',
  templateUrl: './buy-goods.component.html',
 // template: '<simple-notifications [options]="options"></simple-notifications>',
  styleUrls: ['./buy-goods.component.scss']
})
export class BuyGoodsComponent implements OnInit {
	public form =null;
	// public form =FormGroup
	public http:Http;
	public service: NotificationsService;
	 
	 //public header:Header;
	 // public account:Account;
  public static PATH:string = 'http://diffter.com/creditAJS//admin/saveAccount'; 
  errorMsg: string;	
	userStatus: string;	
  private data: any;
  constructor(private fb: FormBuilder, http: Http,private _service:NotificationsService,translate: TranslateService,private router: Router) {
	  this.http=http;
	 this.service=_service;
	  
	
  }
  ngOnInit() {
    this.form = this.fb.group({
      libelle: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      numCompte:'',
      numPersonne:'',
	    adresse:'',
      tel:' ',
	    type:' ',
      message:''
    });
	
	
  }
  
  onSubmit(form: any): void {  
    console.log('you submitted value:', form); 
	
	//console.log(this.vm);
  }
  
  
  
  fullUpdate() {
    this.form.patchValue({libelle: 'Partial', password: 'monkey'});
  }
  reset() {
    this.form.reset();
  }



  redirect() {
    this.router.navigate(['./apps']);
  }

    public title: string = 'just a title';
    public content: string = 'just content';
    public type: string = 'success';

    public deleteId: string;

    public temp: boolean[] = [true, false];


    isActive:boolean=false;
  
    doSaveAccount() {
      //this.service
      //this.show_message('inside');
      let a = this._service.success(this.title, this.content, {id: 123});
      alert('erreur los call from angular ');
      //this.withOverride();

      let formData = this.form.value;
      let header = new Headers();
      header.append('Content-Type', 'application/json');


      this.http.post(BuyGoodsComponent.PATH, formData,{headers: header})
        .map((res:Response) => res.json())
        .subscribe(
          (data) => {
            this.form=data;
            // this.account=data;
            //let mess: string= this.account.message as string;
            //this.show_message("mess");
            //alert(''+mess);
            //this._service.success('bla', mess);
          },
            err => alert('erreur los call from angular '+err)// complete
        );	
    }
  
  show_message(){
	  //alert('erreur los call from angular ');
	   this.service.success('Test', 'str');
  }
  onCreate(event) {
        console.log(event);
  }

  onDestroy(event) {
    console.log(event);
  }
	private html = `<p>Test</p><p>A nother test</p>`;
	create() {
        switch (this.type) {
            case 'success':
                let a = this._service.success(this.title, this.content, {id: 123});
                break;
            case 'alert':
                this._service.alert(this.title, this.content);
                break;
            case 'error':
                this._service.error(this.title, this.content);
                break;
            case 'info':
                this._service.info(this.title, this.content);
                break;
            case 'bare':
                this._service.bare(this.title, this.content);
                break;
        }
    }
	
	withOverride() { this._service.create('pero', 'peric', 'success', {timeOut: 0, clickToClose: false, maxLength: 3, showProgressBar: true, theClass: 'overrideTest'}) }

  withHtml() {this._service.html(this.html, 'success') }

  removeAll() { this._service.remove() }
  
  public options = {
        timeOut: 5000,
        lastOnBottom: true,
        clickToClose: true,
        maxLength: 0,
        maxStack: 7,
        showProgressBar: true,
        pauseOnHover: true,
        preventDuplicates: false,
        preventLastDuplicates: 'visible',
        rtl: false,
        animate: 'scale',
        position: ['right', 'bottom']
    };
  
  
  

  
}