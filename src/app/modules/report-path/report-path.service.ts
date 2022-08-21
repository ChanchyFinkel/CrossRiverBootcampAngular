import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { LocationDTO } from 'src/app/models/loactionDTO';
import { Patient } from 'src/app/models/patient.model';



@Injectable({
  providedIn: 'root'
})
export class ReportPathService {
  baseUrl: string = "/api/Location/";

   constructor(private _http: HttpClient) { }

   getAllLocations(): Observable<Location[]> {
    return this._http.get<Location[]>(this.baseUrl)
  }
  getLocationsByPatientId(patientId:string): Observable<Location[]> {
    return this._http.get<Location[]>(`${this.baseUrl+patientId}`)
  }
  addNewLocation(newLocation:LocationDTO): Observable<number> {
    return this._http.post<number>(`${this.baseUrl}`, newLocation)
  }
  deleteLocation(locationId:number): Observable<boolean> {
    return this._http.delete<boolean>(`${this.baseUrl+ locationId}`)
  }
  getPatientById(patientId:string): Observable<Patient>{
    return this._http.get<Patient>(`/api/Patient/${+patientId}`)
  }
  addNewPatient(newPatient:Patient): Observable<string> {
    return this._http.post<string>(`/api/Patient/`,newPatient)
  }
}
