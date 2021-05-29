import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-true-or-false-quiz',
  templateUrl: './true-or-false-quiz.component.html',
  styleUrls: ['./true-or-false-quiz.component.less']
})
export class TrueOrFalseQuizComponent implements OnInit {
  isLinear = false;
   questionsForm: FormGroup;
  questions = [
    {
      id:"q_1",
      question: " Is my name Vincent?",
      answer: null
    },
    {
      id:"q_2",
      question: "Is my favorite color black?",
      answer: null
    },

    {
      id:"q_3",
      question: "I like bananas",
      answer: null 
    }

  ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    let formData = {};
    for(let i = 0; i < this.questions.length; i++) {
      formData[this.questions[i].id] = ['' ];
    }
    console.log(formData);

    this.questionsForm = this._formBuilder.group(formData);
  }
  
  questionaireCompleted(){
    console.log("Questionaire Completed! ");
    console.log(this.questionsForm);
  }
}
