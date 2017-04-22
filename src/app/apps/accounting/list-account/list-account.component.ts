import { Component, OnInit } from '@angular/core';
import {TranslateService} from 'ng2-translate/ng2-translate';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.scss']
})
export class ListAccountComponent implements OnInit {
rows= [];
  count = 0;
  offset = 0;
  limit = 7;
  
  constructor(translate: TranslateService) {
	
	
	  
  }
  
  

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
}
