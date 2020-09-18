import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Command } from '../models/command';
import { CommandStructure } from '../models/structure.command';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  commandUrl: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getCommands(): Observable<CommandStructure> {
    return this.http.get<CommandStructure>(`${this.commandUrl}/commands`);
  }
  getCommandById(id): Observable<Command[]> {
    return this.http.get<Command[]>(`${this.commandUrl}/command/${id}`);
  }
  addCommand(Command: Command): Observable<Command[]> {
    return this.http.post<Command[]>(`${this.commandUrl}/command/add`, Command);
  }

  // updateCommand(id, Command: Command) {
  //   return this.http.put<Command[]>(`${this.commandUrl}/command/update/${id}`, Command);
  // }

  deleteCommand(id): Observable<Command[]> {
    return this.http.delete<Command[]>(`${this.commandUrl}/command/delete/${id}`);
  }

}
