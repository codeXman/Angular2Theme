import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/startWith';


@Component({
  selector: 'app-auto-account',
  templateUrl: './auto-account.component.html',
  styleUrls: ['./auto-account.component.scss']
})
export class AutoAccountComponent  {

  
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
	 req.open('GET', `http://localhost:8080/creditAJS/admin/listAllAccounts`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  onPage(event) {
    console.log('Page Event', event);
    this.page(event.offset, event.limit);
  }

 

}



