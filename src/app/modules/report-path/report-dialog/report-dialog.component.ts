import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-report-dialog',
  templateUrl: './report-dialog.component.html',
  styleUrls: ['./report-dialog.component.css']
})
export class ReportDialogComponent implements OnInit {
  patientId!: string;

  constructor(public dialogRef: MatDialogRef<ReportDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string){}

  ngOnInit(): void {
    this.patientId = this.data;
  }
  onCloseBtnClicked(){
    this.dialogRef.close(false)
  }
  onSaveBtnClikced(){
    this.dialogRef.close(true)
  }

}

