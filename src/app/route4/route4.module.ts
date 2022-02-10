
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { Route4Component } from "./route4.component";
import { sharedModule } from "../shared/shared.module";

const routes: Routes = [
    { path: 'R4', component: Route4Component}
]
@NgModule({
    declarations: [
      Route4Component
    ],
    imports: [sharedModule,RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class route4Module {
    
}