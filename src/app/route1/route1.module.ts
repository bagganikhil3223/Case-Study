import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Route1Component } from "./route1.component";


const routes: Routes = [
    {path: 'R1', component:Route1Component}
]
@NgModule({
    declarations: [
      Route1Component
    ],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class route1Module {

}