import { Component, OnDestroy, OnInit } from '@angular/core';
import { tableResponse } from '../constants/tableResponseConstants';
import { TableResponse } from '../models/tableResponse';
import { KeysPipe } from '../shared/Pipes/filterObjectKeys';

@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.scss'],
  providers:[KeysPipe]
})
export class Route5Component implements OnInit, OnDestroy {

  tableResponse: TableResponse[] | any = [];
  tableResponseBackup: TableResponse[] | any = [];
  sortOrder = "asc";
  count = 0;
  clickedHeaderVal!:string;


  constructor() { }

  ngOnInit(): void {
    this.tableResponse = tableResponse;
    this.tableResponseBackup = [...tableResponse];
  }

  clickedHeaderValue() {
    this.count++;
    if(this.count === 3) {
      this.tableResponse = [...this.tableResponseBackup];
      this.count = 0;
    }
  }

  ngOnDestroy(): void {
      this.tableResponse = [];
  }

}
