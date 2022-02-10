import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { UtilityService } from 'src/app/services/utility-service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit, OnDestroy {

  @Input() countDownValue!: number;
  countDownValueUsingSubject!: number;

  countDownValueSubscription!: Subscription;

  constructor(private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.countDownValueSubscription = this.utilityService.countDownTimer.subscribe(timerValue => {
      this.countDownValueUsingSubject = timerValue;
    })
  }

  ngOnDestroy(): void {
      this.countDownValueSubscription.unsubscribe();
  }

}
