import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IntroSection } from "./intro.component";
import { LabelComponent } from "./../label/label.component";

@NgModule({
  declarations: [
    IntroSection,
    LabelComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [
    IntroSection
  ]
})

export class AppModule {}