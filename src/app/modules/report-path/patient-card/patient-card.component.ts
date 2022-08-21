import { Component, Inject, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReportPathService } from '../report-path.service';


@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent implements OnInit {
  patientForm!:FormGroup;
  constructor(private _reportPathService:ReportPathService,public dialogRef: MatDialogRef<PatientCardComponent>) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.patientForm = new FormGroup({
      "id": new FormControl("", Validators.required),
      "name": new FormControl("", Validators.required),
      "dateOfBirth": new FormControl("", Validators.required),
    });
  }

  addNewPatient(): void {
  this._reportPathService.addNewPatient(this.patientForm.value).subscribe(data=>{
    if(data)
    {
      alert(`Welcome to${this.patientForm.controls['Name']}`);
    }
    else{
      alert("oops....' something went wrong. Please try again");
    }
  })
  }
}
