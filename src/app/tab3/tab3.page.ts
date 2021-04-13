import { Component, OnInit } from '@angular/core';

import { ModuleDataService } from '../services/moduledata.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  modules: any;
  newModules: any;

  constructor(private moduledataservice: ModuleDataService) {}

  getModuleData(){
    // Get the information from the API using Observable
    // by subscribing to the lecturerservice Observable 
    this.moduledataservice.getData().subscribe(result => {
      this.modules = result;
      this.newModules = this.modules.modules;
     });
  }

  ngOnInit() {
    this.getModuleData();
  }
}
