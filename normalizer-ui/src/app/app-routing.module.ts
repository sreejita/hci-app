import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {UserComponent} from './user/user.component';
import {Part1Component} from './part1/part1.component';
import {IntroOneComponent} from './introOne/introOne.component';
import {Checkout1Component} from './checkout1/checkout1.component';

const routes: Routes = [
   { path: 'init', component: MainComponent},
   {path: 'profile/:paymentMethod', component: UserComponent},
    {path: 'part1/:paymentMethod/:email', component: Part1Component},
    {path: 'intro1/:paymentMethod/:email', component: IntroOneComponent},
    {path: 'checkout1/:paymentMethod/:email', component: Checkout1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
