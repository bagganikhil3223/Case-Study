
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { Route6Component } from "./route6.component";
import { CommonModule } from "@angular/common";
import { sharedModule } from "../shared/shared.module";

const routes: Routes = [
    { path: 'R6', component: Route6Component}
]
@NgModule({
    declarations: [
      Route6Component
    ],
    imports: [CommonModule,sharedModule,RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class route6Module {
    
}