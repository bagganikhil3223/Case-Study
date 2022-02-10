import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilityService } from 'src/app/services/utility-service.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit, OnDestroy {

  @Input() startPauseTime:any[] = [];

  startPauseTimeUsingSubject: any[] = [];

  startPauseTimeSubscription!: Subscription;

  constructor(private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.startPauseTimeSubscription = this.utilityService.startPauseTimeStampValues.subscribe(timeStampValues => {
      this.startPauseTimeUsingSubject.push(timeStampValues);
    })
  }

  ngOnDestroy(): void {
    // Clearing subscription to avoid memory leaks
      this.startPauseTimeSubscription.unsubscribe();
  }

}
