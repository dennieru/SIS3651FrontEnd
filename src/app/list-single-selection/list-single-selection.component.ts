import { Component } from '@angular/core';

@Component({
  selector: 'app-list-single-selection',
  templateUrl: './list-single-selection.component.html',
  styleUrls: ['./list-single-selection.component.css']
})
export class ListSingleSelectionComponent {
  vaccines2: [
    {
      Id:"00000000-0000-0000-0000-000000000000",
      IsVaccine: true,
      Name: "RCRD015",
      Notes: "",
      RecordNumber: "",
      Status: "",
      Tags: ["rabies", "2020"],
      Type: "vaccine",
      Vaccines: [{
        Cost: "",
        Description: "Core Vaccine",
        Disease: "",
        Id: "00000000-0000-0000-0000-000000000000",
        Living: "Not living",
        Name: "FVRSP",
        Preparation: "",
        Type: "core",
      }],
    },
    {
      Id:"00000000-0000-0000-0000-000000000000",
      IsVaccine: true,
      Name: "RCRD067",
      Notes: "",
      RecordNumber: "",
      Status: "",
      Tags: ["rabies", "2020","dogs"],
      Type: "vaccine",
      Vaccines: [{
        Cost: "",
        Description: "Core Vaccine",
        Disease: "",
        Id: "00000000-0000-0000-0000-000000000000",
        Living: "Not living",
        Name: "FVRSP",
        Preparation: "",
        Type: "core",
      }],
    },
  ];
}
