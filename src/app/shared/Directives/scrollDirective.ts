import { Directive, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({ selector: '[scrollDirective]' })
export class ScrollDirective {
    @Output()
    scrollEvent: EventEmitter<any> = new EventEmitter();
    // removeItemsEvent: EventEmitter<any> = new EventEmitter();
    

    @HostListener('window:wheel', [ '$event' ])
    onScrollHandler(event:any) {
        if(event.deltaY > 0) {
            this.scrollEvent.emit(event);
        }
    }
}
