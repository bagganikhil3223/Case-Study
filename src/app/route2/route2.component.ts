import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { ApiCallingService } from '../services/api-calling-service.service';
@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.scss']
})
export class Route2Component implements OnInit {
  isGridView = true;
  items: {
    price:number,
    image:string,
    title:string
  }[] = [];
  constructor(private spinner: NgxSpinnerService,
    private apiCallingService: ApiCallingService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.apiCallingService.getProductsInfo().subscribe((res:any) => {
      this.items = res.map((data:any) => {
        return {
                  price: data.price,
                  image:data.image,
                  title:data.title.slice(0,20)
      }
    });

    this.items = [...this.items,...this.items];
    // Default sorting as low to high
    this.items = this.items.sort((low, high) => low.price - high.price);
    this.spinner.hide();
  });
}



  getProductElements() {
    let elements = document.getElementsByClassName("dynamic-container") as HTMLCollection;
    return elements;
  }
  setGridListView() {
    this.isGridView = !this.isGridView;
  }

  gridView() {
    let elements = this.getProductElements();
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove('odd-children');
      elements[i].classList.remove('even-children');
    }
    this.setGridListView();

  }
  listView() {
    let elements = this.getProductElements();
    for (let i = 0; i < elements.length; i++) {
      if(i%2==0) {
        elements[i].classList.add('odd-children');
      } else {
        elements[i].classList.add('even-children');
      }
    }
    this.setGridListView();
  }


  sort(event: any) {
    switch (event.target.value) {
      case "Low":
        {
          this.items = this.items.sort((low, high) => low.price - high.price);
          break;
        }

      case "High":
        {
          this.items = this.items.sort((low, high) => high.price - low.price);
          break;
        } 
      }
}
}