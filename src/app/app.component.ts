import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pets = [];
  vaccines3 = [];
  user: any;
  public today: Date = new Date();

  constructor(private dataService: DataService, public dialog: MatDialog) { }

  ngOnInit() {
    var userName = 'Daniel';
    this.dataService.sendGetRequest('owner/?name='+userName).subscribe((data: any[])=>{
      console.log(data);
      this.user = data;
    })
    this.dataService.sendGetRequest('pet').subscribe((data: any[])=>{
      console.log(data);
      this.pets = data;
    })
  }
  
  openDialog(petChoosed): void {
    
    this.dataService.sendGetRequest('vaccine/?name='+petChoosed.Name).subscribe((data: any[])=>{
      console.log('aa');
      console.log(data);
      this.vaccines3 = data;
      console.log('bb');
      console.log(this.vaccines3);
    })
    let dialogRef = this.dialog.open(DialogModalComponent, {
      data: {
        pet: petChoosed,
        vaccines3: this.vaccines3,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("closed");
      console.log(result);
    });
  }
}
