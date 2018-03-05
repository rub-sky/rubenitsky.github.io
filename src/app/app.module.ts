import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatChipsModule, MatChip, MatChipList} from '@angular/material';

import {AppComponent} from './app.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatChip,
    MatChipList
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
