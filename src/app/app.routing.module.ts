import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '', component:HomeComponent
    },
    {
        path: 'home', component:HomeComponent
    },
    {
        path: 'route1', loadChildren: () => import('./route1/route1.module').then(m => m.route1Module)
    },
    {
        path: 'route2', loadChildren: () => import('./route2/route2.module').then(m => m.route2Module)
    },
    {
        path: 'route3', loadChildren: () => import('./route3/route3.module').then(m => m.route3Module)
    },
    {
        path: 'route4', loadChildren: () => import('./route4/route4.module').then(m => m.route4Module)
    },
    {
        path: 'route5', loadChildren: () => import('./route5/route5.module').then(m => m.route5Module)
    },
    {
        path: 'route6', loadChildren: () => import('./route6/route6.module').then(m => m.route6Module)
    },
    {
        path: '**', redirectTo:'/home'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules}),],
  exports: [RouterModule]
})
export class AppRoutingModule { }