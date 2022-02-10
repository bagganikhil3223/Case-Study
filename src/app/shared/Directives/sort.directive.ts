import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";
import { tableResponse } from "src/app/constants/tableResponseConstants";
import { Sort } from "src/app/util/sort";

@Directive({
    selector:'[appSort]'
})

export class SortDirective {

    @Input() appSort!: any[];

    constructor(private renderer:Renderer2, private targetElement: ElementRef) {

    }

    @HostListener('click')
    sortData() {

        const sort = new Sort();

        const element = this.targetElement.nativeElement;

        const order = element.getAttribute("data-order");

        const type = element.getAttribute("data-type");

        const property = element.getAttribute('data-name');

        const countValue = element.getAttribute('data-countValue');

        if(order === 'desc' && countValue == 2) {
            this.appSort.sort(sort.startSort(property,order,type));
            element.setAttribute("data-order","asc");
        }
        else if(order === 'asc' && countValue == 1) {
            this.appSort.sort(sort.startSort(property,order,type));
            element.setAttribute("data-order","desc");
        } else {
            return;
        }

    }
}