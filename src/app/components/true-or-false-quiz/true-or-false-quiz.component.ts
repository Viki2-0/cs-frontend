import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-true-or-false-quiz',
  templateUrl: './true-or-false-quiz.component.html',
  styleUrls: ['./true-or-false-quiz.component.less']
})
export class TrueOrFalseQuizComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  questions = [
    {
      question: " Is my name Vincent?",
      answer: null
    },
    {
      question: "Is my favorite color black?",
      answer: null
    },

    {
      question: "I like bananas",
      answer: null 
    }

  ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  questionaireCompleted(){
    console.log("Questionaire Completed! ");
  }
}
