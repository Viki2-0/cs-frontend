import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrueOrFalseQuizComponent } from './components/true-or-false-quiz/true-or-false-quiz.component';

const routes: Routes = [
  { path: 'true-or-false', component: TrueOrFalseQuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
