import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { StartPauseCounterValues } from "../models/startPauseCountValues";

@Injectable({providedIn:'root'})
export class UtilityService {
    // for countdown timer in component 1
    countDownTimer = new Subject<number>();

    // for time stamp values in component 3
    startPauseTimeStampValues = new Subject<string>();

    // for count of start pause values in component 4
    startPauseCountValuesUsingSubject = new Subject<StartPauseCounterValues>();



    constructor(private router:Router) {}

    getDate(date:any) {
        return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
      }

    getAMPM(date:any) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0'+minutes : minutes;
        seconds = seconds < 10 ? '0'+seconds : seconds;
        var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
        return strTime;
      }

      getCurrentRoute () {
          return this.router.url;
      }

}