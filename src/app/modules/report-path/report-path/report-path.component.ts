import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PatientCardComponent } from '../patient-card/patient-card.component';
import { ReportDialogComponent } from '../report-dialog/report-dialog.component';
import { ReportPathService } from '../report-path.service';
//import isIsraeliIdValid from 'israeli-id-validator';
@Component({
  selector: 'app-report-path',
  templateUrl: './report-path.component.html',
  styleUrls: ['./report-path.component.css']
})
export class ReportPathComponent {
  locationsList: Location[] = [];
  displayedColumns: string[] = ['startDate', 'endDate', 'city', 'location', 'delete'];
  dataSource!: MatTableDataSource<Location>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  patientIdFormControl = new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]);


  constructor(private _reportPathService: ReportPathService, public dialog: MatDialog, public patientCardDialog: MatDialog) {

  }
  ngOnInit(): void {
    //console.log(isIsraeliIdValid(123456782))
  }
  // ngAfterViewInit() {
  //   this.getLocationsByPatientId();
  // }
  addNewLocation(patientId: string): void {
    this.openDialog(patientId);
  }
  openPatientDialog(paientId: string): void {
    const dialogRef = this.dialog.open(PatientCardComponent, {
      width: '60%',
      height: '55%',
    });
  }
  openDialog(Id: string): void {
    const dialogRef = this.dialog.open(ReportDialogComponent, {
      width: '60%',
      height: '55%',
      data:Id ,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (! result) {
        this.getLocationsByPatientId();
      }
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getLocationsByPatientId() {
    this._reportPathService.getPatientById(this.patientIdFormControl.value).subscribe(data => {
      if (data) {
        this._reportPathService.getLocationsByPatientId(this.patientIdFormControl.value).subscribe(data => {
          if (data) {
            this.locationsList = data;
            this.dataSource = new MatTableDataSource(this.locationsList);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            // alert("All locations are available");
          }
          else {
            this.locationsList = [];
            this.dataSource = new MatTableDataSource(this.locationsList);
          }
        })
      }
      else {
        this.openPatientDialog(this.patientIdFormControl.value);
      }
    })
  }
deletetLocation(locationId: number): void {
  this._reportPathService.deleteLocation(locationId).subscribe(data => {
    if (data) {
      alert("location deleted successfully!!");
      this.getLocationsByPatientId();
    }
    else {
      alert("oops!");
    }
  })
}
}
