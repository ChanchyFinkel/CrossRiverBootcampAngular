import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportCardComponent } from './report-card/report-card.component';
import { ReportDialogComponent } from './report-dialog/report-dialog.component';
import { ReportPathComponent } from './report-path/report-path.component';
import { ViewPathComponent } from './view-path/view-path.component';
import { PatientCardComponent } from './patient-card/patient-card.component';



@NgModule({
  declarations: [ReportPathComponent,ReportCardComponent,ReportDialogComponent,ViewPathComponent,PatientCardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
     FormsModule
  ],exports: [ReportPathComponent,ReportCardComponent,ViewPathComponent,]
})
export class ReportPathModule { }
