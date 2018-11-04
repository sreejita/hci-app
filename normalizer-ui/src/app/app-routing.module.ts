import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {FileComponent} from './file/file.component';
import {UserComponent} from './user/user.component';
import {Part1Component} from './part1/part1.component';

const routes: Routes = [
   { path: 'init', component: MainComponent},
   {path: 'profile', component: UserComponent},
    {path: 'part1/:email', component: Part1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
