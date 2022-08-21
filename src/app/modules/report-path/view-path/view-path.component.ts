
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReportPathService } from '../report-path.service';


@Component({
  selector: 'app-view-path',
  templateUrl: './view-path.component.html',
  styleUrls: ['./view-path.component.css']
})
export class ViewPathComponent implements OnInit {

  locationsList:Location[] = [];
  displayedColumns: string[] = ['startDate', 'endDate', 'city', 'location'];
  dataSource!: MatTableDataSource<Location>;

  @ViewChild(MatPaginator) paginator!: MatPaginator ;
  @ViewChild(MatSort) sort!: MatSort ;
  constructor(private _reportPathService: ReportPathService) { }

  ngOnInit(): void {
    this.getAllLocations();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getAllLocations(){
this._reportPathService.getAllLocations().subscribe(data=>{
  if(data)
  {
    this.locationsList=data;
    this.dataSource = new MatTableDataSource(this.locationsList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    //alert("All locations are available");
  }})  
}
}
