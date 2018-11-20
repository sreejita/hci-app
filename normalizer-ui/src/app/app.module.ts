import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FileComponent } from './file/file.component';
import { UserComponent } from './user/user.component';
import { Part1Component } from './part1/part1.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IntroOneComponent} from './introOne/introOne.component';
import {Checkout1Component} from './checkout1/checkout1.component';
import {IntroTwoComponent} from './introTwo/introTwo.component';
import {Part2Component} from './part2/part2.component';
import {Checkout2Component} from './checkout2/checkout2.component';
import {EndComponent} from './end/end.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FileComponent,
      UserComponent,
      Part1Component,
      IntroOneComponent,
      Checkout1Component,
      IntroTwoComponent,
      Part2Component,
      Checkout2Component,
      EndComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
      ReactiveFormsModule,
      FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
