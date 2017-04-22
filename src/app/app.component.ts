import { Component } from '@angular/core';
import {TranslateService} from 'ng2-translate/ng2-translate';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    constructor(translate: TranslateService) {
    translate.addLangs(['en', 'fr','ar']);
    

	const browserLang: string = translate.getBrowserLang();
	console.log("browser Language");
	// console.log(browserLang);
	// translate.use("ar");
	// translate.use("en");
    translate.use(browserLang.match(/en|fr|ar/) ? browserLang : 'ar');
	translate.setDefaultLang('ar');
	// translate.onLangChange.subscribe((event: LangChangeEvent) => {
	// 	if(event.lang=='ar')
	// 	     {}
	// 		else
	// 		{}
 //  // do something
	// });
  }
}
