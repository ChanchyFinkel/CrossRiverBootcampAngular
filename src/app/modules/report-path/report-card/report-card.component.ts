import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { ReportPathService } from '../report-path.service';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.css'], 
    providers: [],
})
export class ReportCardComponent implements OnInit {

  @Input()
  patientId!: string;
  @Output()
  onSaveBtnClikced = new EventEmitter();
  constructor(private _reportPathService: ReportPathService) { }

  ngOnInit(): void {
    this.buildForm();
    alert("You are not register, Please register now!");
  }
  reportForm!: FormGroup;

  buildForm(): void {
    this.reportForm = new FormGroup({
     // "id": new FormControl(0, Validators.required),
      "startDate": new FormControl("", Validators.required),
      "endDate": new FormControl("", Validators.required),
      "city": new FormControl("", Validators.required),
      "address": new FormControl("", Validators.required),
      "patientId": new FormControl("", Validators.required),
    });
  }

  addNewLocation(): void {
   // this.reportForm.patchValue({"patientId":this.patientId});
   this.reportForm.controls["patientId"].setValue(this.patientId);
    this._reportPathService.addNewLocation(this.reportForm.value).subscribe(data => {
      if (data)
      {
        alert("location has been successfully added")
        this.onSaveBtnClikced.emit();
      }
    })
  }
}
