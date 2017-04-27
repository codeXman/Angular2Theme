import { Component, OnInit } from '@angular/core';
// import { } from '@angular/material';
import { MdDialogRef} from '@angular/material';


@Component({
  selector : 'confirm-dialog',
  templateUrl : './confirm-dialog.component.html'
})
export class ConfirmDialog{
	constructor(public dialogInstance :MdDialogRef<ConfirmDialog>){

	}
}