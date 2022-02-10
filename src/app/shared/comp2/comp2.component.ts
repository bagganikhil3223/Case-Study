import { Component, 
  ElementRef, 
  EventEmitter, 
  OnInit, 
  Output, 
  ViewChild } from '@angular/core';
import { StartPauseCounterValues } from 'src/app/models/startPauseCountValues';
import { UtilityService } from 'src/app/services/utility-service.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {
  @ViewChild('counterInput', { static: false }) counterInput!: ElementRef;
  timer: any;
  counterValue!:number;
  isStarted = false;
  pausedTimerArray: any[] = [];
  startCount = 0;
  pauseCount = 0;
  currentRoute!: string;
  @Output() startPauseTimeStamp = new EventEmitter();
  @Output() counterValueEvent = new EventEmitter();
  @Output() startPauseCountValues = new EventEmitter();
  constructor(private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.currentRoute = this.utilityService.getCurrentRoute();
  }

  startPauseTimer() {
    if (!this.isStarted) {
   // start the timer
   this.startTimer();
   this.startCount++;
   this.setTimeStampsValues();
   this.setStartPausedCounterValues();
   this.setIsTimerStartedPaused();

  } else {
       // stop the timer
       this.pauseTimer();
       this.pauseCount++;
       this.setTimeStampsValues();
       this.setStartPausedCounterValues();
       this.setIsTimerStartedPaused();
  }
  if(this.counterValue) {
    this.counterInput.nativeElement.value = '';
  }
  }

  setTimeStampsValues(resetPressed?:boolean) {
    let startedOrPausedTimeStamp;
    if(resetPressed) {
      startedOrPausedTimeStamp = `Reset at ${this.convertDate()}`
      resetPressed = false;
    } else {
      startedOrPausedTimeStamp = !this.isStarted ? `Started at ${this.convertDate()}` : 
    `Paused at ${this.convertDate()}`;
    }
    if(this.currentRoute && this.currentRoute.includes('R3')) {
    this.startPauseTimeStamp.emit(startedOrPausedTimeStamp);
    } else {
      this.utilityService.startPauseTimeStampValues.next(startedOrPausedTimeStamp);
    }
  }

  setStartPausedCounterValues() {
    
    let startPauseCountObj : StartPauseCounterValues;
    startPauseCountObj = {
      startCounter:this.startCount,
      pausedCounter:this.pauseCount
    };
    if(this.currentRoute && this.currentRoute.includes('R3')) {
        this.startPauseCountValues.emit(startPauseCountObj);
    } else {
      this.utilityService.startPauseCountValuesUsingSubject.next(startPauseCountObj);
    }
    
  }

  setIsTimerStartedPaused() {
    this.isStarted = !this.isStarted;
  }

  convertDate() {
    const date = new Date();
    const time = this.utilityService.getAMPM(date);
    const requiredDate = this.utilityService.getDate(date);
    return requiredDate + ' ' + time;
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.counterValue--;
      if(this.counterValue > 0) {
        this.sendCounterValuesToComponents();
      }
      if(this.counterValue === 0) {
        this.sendCounterValuesToComponents();
        clearInterval(this.timer);
      }
    }, 1000);
  }
  pauseTimer() {
      clearInterval(this.timer);
      const pausedAt = this.counterValue;
      this.pausedTimerArray.push(pausedAt);
  }

  resetCounter() {
    clearInterval(this.timer);
    this.counterValue = 0;
    this.pausedTimerArray = [];
    this.isStarted = false;
    this.sendCounterValuesToComponents();
    this.setTimeStampsValues(true);
  }

  sendCounterValuesToComponents() {
    if(this.currentRoute && this.currentRoute.includes('R3')) {
      this.counterValueEvent.emit(this.counterValue);
    } else {
      this.utilityService.countDownTimer.next(this.counterValue);
    }
  }

}
