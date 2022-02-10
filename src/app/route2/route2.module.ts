import { Route2Component } from "./route2.component"
import { RouterModule, Routes } from "@angular/router";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [
    {path: 'R2', component: Route2Component}
]
@NgModule({
    declarations: [
      Route2Component
    ],
    imports: [NgxSpinnerModule,CommonModule,RouterModule.forChild(routes)],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [RouterModule]
  })

export class route2Module {
    
}