import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css'],
})
export class DialogModalComponent implements OnInit {
  vaccines = [];
  
  constructor(private dataService: DataService, public dialogRef: MatDialogRef<DialogModalComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
    }

    ngOnInit(){
    }

    loadVaccines(pet){
      this.dataService.sendGetRequest('vaccine/?name='+pet.Name).subscribe((data: any[])=>{
        console.log('01');
        console.log(data);
        this.data.vaccines = data;
        console.log('02');
        console.log(this.vaccines);
      })
    }

    save(pet){
      this.dialogRef.close("saved!"+pet.Name);
    }
}
