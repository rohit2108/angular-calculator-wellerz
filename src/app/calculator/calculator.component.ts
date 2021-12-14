import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  calculatorForm: FormGroup;
  operatorSelected: string;
  totalValue: number = 0;

  calculatorHistory: string[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly calculatorService: CalculatorService
  ) {}

  /**
   * Ng life cycle hook
   * Method to intialize the form group
   */
  ngOnInit(): void {
    this.calculatorForm = this.fb.group(
      {
        firstValue: ['', [Validators.required, Validators.maxLength(9)]],
        secondValue: ['', [Validators.required, Validators.maxLength(9)]],
      },
      {
        updateOn: 'blur',
      }
    );
    this.calc.secondValue.disable();
  }

  /**
   * Method to get operator from user when button pressed
   * @param value operator on click of button
   * @returns void
   */
  getOperator(value: any): void {
    if (this.calc.firstValue.value) {
      this.calc.secondValue.enable();
      this.operatorSelected = value.target.value;
    }
  }

  /**
   * Method to calculate total value
   * @param value takes an operator selected
   * @returns void
   */
  calculateTotalValue(): void {
    const firstNumber = this.calc.firstValue.value;
    const secondNumber = this.calc.secondValue.value;
    if (this.operatorSelected === '+') {
      this.totalValue = firstNumber + secondNumber;
    } else if (this.operatorSelected === '-') {
      this.totalValue = firstNumber - secondNumber;
    } else if (this.operatorSelected === '*') {
      this.totalValue = firstNumber * secondNumber;
    } else if (this.operatorSelected === '/') {
      this.totalValue = firstNumber / secondNumber;
    }
    this.calculatorHistory.push(
      firstNumber + this.operatorSelected + secondNumber + '=' + this.totalValue
    );

    this.calculatorService.setCalcHistory(this.calculatorHistory);
  }

  /**
   * Method to reset form group and disable second form control
   * @param value takes an input on press of button
   */
  onReset(value: any): void {
    if (value.target.value === 'C') {
      this.totalValue = 0;
      this.calc.secondValue.disable();
      this.calculatorForm.reset();
    }
  }

  /**
   * Get method for formgroup control
   */
  get calc() {
    return this.calculatorForm.controls;
  }
}
