import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';
import { UserModalComponent } from './user-modal/user-modal.component';

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
    var userName = 'developer_fullstack';
    this.dataService.sendGetRequest('owner/?name='+userName).subscribe((data: any[])=>{
      console.log(data);
      this.user = data;
    })
    this.dataService.sendGetRequest('pet/?nickName='+userName).subscribe((data: any[])=>{
      console.log(data);
      this.pets = data;
    })
  }
  
  
  
  openUserDialog(): void {
    this.dialog.open(UserModalComponent, {
      width: '450px',
      data: {
      }
    });
  }

  openDialog(petChoosed): void {
    
    this.dataService.sendGetRequest('vaccine/?name='+petChoosed.Name).subscribe((data: any[])=>{
      this.vaccines3 = data;
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
