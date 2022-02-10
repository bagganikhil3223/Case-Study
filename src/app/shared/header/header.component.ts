import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  numbers!: any[];
  clickedRoute!:number;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.numbers = Array(6).fill(0);
  }

  loadRoute(index: Number) {
    // this.clickedRoute = +index;
    if(index == 0) {
    this.router.navigate(['/route1/R1']);
    } 
    if(index == 1) {
      this.router.navigate(['/route2/R2']);
    }
    if(index == 2) {
      this.router.navigate(['/route3/R3']);
    }
    if(index == 3) {
      this.router.navigate(['/route4/R4']);
    }
    if(index == 4) {
      this.router.navigate(['/route5/R5']);
    }
    if(index == 5) {
      this.router.navigate(['/route6/R6']);
    }
  }
  backToHome() {
    this.router.navigate(['/home']);
  }

}
