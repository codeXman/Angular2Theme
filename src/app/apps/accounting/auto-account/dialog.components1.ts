import { Component } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { DialogsService } from './dialogs.service';
//import { DialogsService } from './accounting/auto-account/dialogs.service';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component1.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponents1 {
public result: any;
  
  constructor(private dialogsService: DialogsService) { }
  
  public openDialog() {
    this.dialogsService
      .confirm('Confirm Dialog', 'Are you sure you want to do this?')
      .subscribe(res => this.result = res);
  }
  
 //constructor() { }
   }