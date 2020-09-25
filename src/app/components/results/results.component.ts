import { Component, OnInit } from '@angular/core';
import { CommandService } from '../../services/command.service';
import { ServiceService} from '../../services/service.service';
import { OfficeService} from '../../services/office.service';

import { CommandStructure } from '../../models/structure.command';
import { ServiceStructure } from '../../models/service.structure';
import { OfficeStructure } from '../../models/structure.office';

import { Command } from '../../models/command';
import { Service } from '../../models/service';
import { Office } from '../../models/office';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  commands: Command[];
  commandCount;

  services: Service[];
  serviceCount;

  offices: Office[];
  officeCount;

  // activeService = 'Service Commercial'

  constructor(private commandService: CommandService, private serviceService: ServiceService, private officeService: OfficeService) { }

  ngOnInit() {
    this.fetchCommands();
    this.fetchServices();
    this.fetchOffices();
  }



  
  fetchCommands() {
    this.commandService
      .getCommands()
      .subscribe((data) => {
        this.commands = data.rows
        this.commandCount = data.commandCount
        console.log(this.commands);
      });
  };
  fetchServices() {
    this.serviceService
      .getServices()
      .subscribe((data) => {
        this.services = data.rows
        this.serviceCount = data.serviceCount
        console.log(this.services);
      });
  };
  fetchOffices() {
    this.officeService
      .getOffices()
      .subscribe((data) => {
        this.offices = data.rows
        this.officeCount = data.officeCount
        console.log(this.offices);
      });
  }
};
