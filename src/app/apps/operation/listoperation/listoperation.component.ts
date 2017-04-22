import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import {TranslateService} from 'ng2-translate/ng2-translate';

@Component({
  selector: 'app-listoperation',
  templateUrl: './listoperation.component.html',
  styleUrls: ['./listoperation.component.scss']
})
export class ListoperationComponent implements OnInit {

  constructor(translate: TranslateService) {
    
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
  

  ngOnInit() {
    this.pageIn(this.offsetIn, this.limitIn);
	this.pageOut(this.offsetOut, this.limitOut);
  }

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
   // req.open('GET', `assets/data/company.json`);
	 req.open('GET', `http://diffter.com/creditAJS/secure/listTodayDailyWithSus`);
	
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
