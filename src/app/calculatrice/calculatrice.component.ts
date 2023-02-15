import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})


export class CalculatriceComponent {
   
  number1: number=0;
  number2: number=0;
  operator: string= '';
  plus: string = '+';
  moins: string = '-';
  multipliate: string = '*' ;
  divide: string = '/' ;
  result: any = 0;


  insertPlus() {
    this.operator = '+';
  }
  insertMoins() {
    this.operator = '-';
  }
  insertMultipliate() {
    this.operator = '*';
  }
  insertDivide() {
    this.operator = '/';
  }

  random1() {
    this.number1 = Math.floor(Math.random() * 101);
  }
  
  random2() {
    this.number2 = Math.floor(Math.random() * 101);
  }

  calculateResult() {
    if (this.operator === '+') {
      this.result = this.number1 + this.number2;
    } else if (this.operator === '-') {
      this.result = this.number1 - this.number2;
    } else if (this.operator === '*') {
      this.result = this.number1 * this.number2;
    } else if (this.operator === '/') {
      this.result = this.number1 / this.number2;
    } else {
      this.result = 0;
    }
  }

  clearValues() {
    this.number1 = 0;
    this.number2 = 0;
    this.operator = '';
    this.result = 0;

  }

}
