import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class ApiCallingService {
    constructor(private http:HttpClient) {}

    getProductsInfo() {
        const url = 'https://fakestoreapi.com/products';
        return this.http.get(url);


//       fetch("https://fakestoreapi.com/products").then(res => res.json()).then(json => {
//       if(json && json.length>0) {
//       json.map((data:any) => {
//       return {
//         price: data.price,
//         image:data.image
//       }
//     });
//     }
// });
}
}