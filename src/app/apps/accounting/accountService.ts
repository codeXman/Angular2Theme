import { BrowserModule } from '@angular/platform-browser';
import { Http, Response,HttpModule,Headers } from '@angular/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import { Account } from './account';

@Injectable()
export class AccountService {	

 private accounts: Observable<Array<Account>>;
     
 public constructor(private http :Http) { }

 
 
 public getAllAccount(): Observable<Account[]> {
	 
    return this.http.get(`http://diffter.com/creditAJS/admin/listAllAccounts`).map(this.extracteData);
  }
  
  
  
  public getAccountDetail(numAc:string): Observable<any[]> {
	 
    return this.http.get(`http://diffter.com/creditAJS/secure/getAccountDetail1?numCompte=`+numAc).map(this.extracteData);
  }
  
  extracteData(res:Response){
	  return res.json();
	  
  }
 
	  
  
	 
      
}
