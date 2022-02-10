
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { Route5Component } from "./route5.component";
import { sharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";

const routes: Routes = [
    { path: 'R5', component: Route5Component}
]
@NgModule({
    declarations: [
      Route5Component,
    ],
    imports: [CommonModule,sharedModule,RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class route5Module {
    
}