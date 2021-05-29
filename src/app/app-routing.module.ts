import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTrueOrFalseComponent } from './components/add-true-or-false/add-true-or-false.component';
import { TrueOrFalseQuizComponent } from './components/true-or-false-quiz/true-or-false-quiz.component';

const routes: Routes = [
  { path: 'true-or-false', component: TrueOrFalseQuizComponent },
  { path: 'create-true-or-false', component: AddTrueOrFalseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
