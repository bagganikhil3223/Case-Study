
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { Route3Component } from "./route3.component";
import { CommonModule } from "@angular/common";
import { sharedModule } from "../shared/shared.module";

const routes: Routes = [
    {path: 'R3', component: Route3Component}
]
@NgModule({
    declarations: [
      Route3Component
    ],
    imports: [sharedModule,CommonModule,RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class route3Module {
    
}