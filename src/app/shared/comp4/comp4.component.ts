import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StartPauseCounterValues } from 'src/app/models/startPauseCountValues';
import { UtilityService } from 'src/app/services/utility-service.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.scss']
})
export class Comp4Component implements OnInit,OnDestroy {

  @Input() startPauseCounterVals!:StartPauseCounterValues;

  startPauseCounterValuesUsingSubject!: StartPauseCounterValues;

  startPauseCounterValuesSubscription!: Subscription;


  constructor(private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.startPauseCounterValuesSubscription = this.utilityService.startPauseCountValuesUsingSubject.subscribe(values => {
      this.startPauseCounterValuesUsingSubject = {...values};
    })

  }

  ngOnDestroy(): void {
    // Clearing subscription to avoid memory leaks
      this.startPauseCounterValuesSubscription.unsubscribe();
  }

}
