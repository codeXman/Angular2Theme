import { Injectable } from '@angular/core';

@Injectable()
export class AccountListService {

  constructor() { }
  
  fetch(cb) {
    const req = new XMLHttpRequest();
   // req.open('GET', `assets/data/company.json`);
	 req.open('GET', `http://localhost:8080/creditAJS/admin/listAllAccounts`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

}
