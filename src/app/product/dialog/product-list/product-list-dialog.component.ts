import { Component, OnInit } from '@angular/core';
import { MdDialogRef} from '@angular/material';


@Component({
  selector : 'product-list-dialog',
  templateUrl : './product-list-dialog.component.html'
})
export class ProductListDialog{

	constructor(public dialogInstance :MdDialogRef<ProductListDialog>){
		
	}

	rows = [
			{'productNumber' : '0111','productName' : 'Product One','theExistingQuantity' : '2','price' : '1000'},
			{'productNumber' : '0112','productName' : 'Product Two','theExistingQuantity' : '3','price' : '1100'},
			{'productNumber' : '0113','productName' : 'Product Three','theExistingQuantity' : '4','price' : '2200'},
			{'productNumber' : '0114','productName' : 'Product Four','theExistingQuantity' : '5','price' : '3000'},
			{'productNumber' : '0115','productName' : 'Product Five','theExistingQuantity' : '6','price' : '4000'},
			{'productNumber' : '0116','productName' : 'Product Six','theExistingQuantity' : '1','price' : '5000'},
	];

	selected = [];

	onSelect (){
		// console.log('selected event', this.selected);
		setTimeout(()=>this.dialogInstance.close(this.selected),500);
	}

	// onActivate (event){
	// 	console.log('Activate event',event);
	// }
}