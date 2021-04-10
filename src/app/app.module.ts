import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrueOrFalseQuizComponent } from './components/true-or-false-quiz/true-or-false-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    TrueOrFalseQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
