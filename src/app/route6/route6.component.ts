import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-route6',
  templateUrl: './route6.component.html',
  styleUrls: ['./route6.component.scss']
})
export class Route6Component implements OnInit {
  dataSource: any[] = []; 

  constructor() { }

  ngOnInit(): void {
    this.dataSource= Array(10).fill(0);
  }
  displayButtonInfo(i:number) {
    alert(`Button "${++i}" Clicked`);
  }
  /*Using this eventEmitter to populate divs dynamically taking help of scroll directive */ 
  addDivisions() {
    this.dataSource.push(this.dataSource.length);
  }

  // @HostListener("window:wheel", ["$event"])
  // onWindowScroll = (event:any) => {
  //  this.dataSource.push(this.dataSource.length);
  // }
}
