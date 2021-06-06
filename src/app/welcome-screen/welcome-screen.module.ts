import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, NgModel } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CookiesPopupComponent } from "../components/cookies-popup/cookies-popup.component";
import { HeaderComponent } from "../components/header/header.component";
import { InputComponent } from "../components/input/input.component";
import { IntroSectionComponent } from "../components/intro/intro.component";
import { LabelComponent } from "../components/label/label.component";
import { WelcomeScreenComponent } from "./welcome-screen.component";

@NgModule({
  declarations: [
    WelcomeScreenComponent,
    HeaderComponent,
    CookiesPopupComponent,
    LabelComponent,
    InputComponent,
    IntroSectionComponent
  ],
  exports: [
    WelcomeScreenComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    WelcomeScreenComponent
  ]
})

export class WelcomeScreenModule {}