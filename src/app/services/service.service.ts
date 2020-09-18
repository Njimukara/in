import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from '../models/service';
import { ServiceStructure } from '../models/service.structure';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  serviceUrl: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getServices(): Observable<ServiceStructure> {
    return this.http.get<ServiceStructure>(`${this.serviceUrl}/services`);
  }
  getServiceById(id): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.serviceUrl}/service/${id}`);
  }
  addService(Service: Service): Observable<Service[]> {
    return this.http.post<Service[]>(`${this.serviceUrl}/service/add`, Service);
  }

  updateService(id, Service: Service) {
    return this.http.put<Service[]>(`${this.serviceUrl}/service/update/${id}`, Service);
  }

  deleteService(id): Observable<Service[]> {
    return this.http.delete<Service[]>(`${this.serviceUrl}/service/delete/${id}`);
  }

}
