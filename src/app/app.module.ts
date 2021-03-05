import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClassesComponent } from './classes/classes.component';
import { ParentComponent } from './parent/parent.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    ParentComponent,
    FirstChildComponent,
    SecondChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
