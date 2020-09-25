import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Office } from '../models/office';
import { OfficeStructure } from '../models/structure.office';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  officeUrl: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getOffices(): Observable<OfficeStructure> {
    return this.http.get<OfficeStructure>(`${this.officeUrl}/offices`);
  }
  getOfficeById(id): Observable<Office[]> {
    return this.http.get<Office[]>(`${this.officeUrl}/office/${id}`);
  }
  addOffice(Office: Office): Observable<Office[]> {
    return this.http.post<Office[]>(`${this.officeUrl}/office/add`, Office);
  }

  // updateCommand(id, Office: Office) {
  //   return this.http.put<Office[]>(`${this.officeUrl}/command/update/${id}`, Office);
  // }

  deleteOffice(id): Observable<Office[]> {
    return this.http.delete<Office[]>(`${this.officeUrl}/office/delete/${id}`);
  }

}
