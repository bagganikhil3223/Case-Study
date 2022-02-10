import { Component, OnInit } from '@angular/core';
import { StartPauseCounterValues } from '../models/startPauseCountValues';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.scss']
})
export class Route3Component implements OnInit {

  counterValue!: number;
  startPauseCountValue!: StartPauseCounterValues;
  startPauseTimestamp:any[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }
  countValue(event:any) {
    this.counterValue = event;
  }

  startPauseCountValues(event:any) {
    if(event) {
      this.startPauseCountValue = {...event};
    }
  }

  startPauseTimeStamp(event:any) {
    this.startPauseTimestamp.push(event);
  }
}

