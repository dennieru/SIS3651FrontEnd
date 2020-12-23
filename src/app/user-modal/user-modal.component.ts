import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl} from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserModalComponent implements OnInit {
  name = '';
  owner = 'developer_fullstack';
  description = '';
  specie = 'puppy';
  date = new FormControl(new Date());
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  save(){
    let newestPet={};
    newestPet['UserId'] = "f17afef7-a964-46c3-ae51-bc2ea81b5ca3";
    newestPet['Id'] = null;
    newestPet['Name'] = this.name;
    newestPet['BirthDate'] = this.date.value;
    newestPet['Specie'] = 1;
    newestPet['SpecieName'] = this.specie;
    newestPet['Breed'] = this.specie;
    newestPet['ImagSrc'] = "../assets/pets/" + this.name + ".jpg";
    newestPet['Age'] = 1;
    newestPet['Description'] = this.description;
    console.log(newestPet);
    this.dataService.sendPostRequest(newestPet, 'pet').subscribe(res =>{
      console.log("res");
      console.log(res);
      console.log("res2");
    })
  }
}
