import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { IntroSectionComponent } from './components/intro/intro.component';
import { CardComponent } from './components/card/card.component';
import { AppComponent } from './app.component';
import { WelcomeScreenModule } from './welcome-screen/welcome-screen.module';
import { GetInTouchModule } from './get-in-touch/get-in-touch.module';
import { ContainerModule } from './container/container.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: IntroSectionComponent },
      { path: 'card/:color', component: CardComponent }
    ]),
    WelcomeScreenModule,
    ContainerModule,
    GetInTouchModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
