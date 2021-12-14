import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/calculator.service';

@Component({
  selector: 'app-calc-history',
  templateUrl: './calc-history.component.html',
  styleUrls: ['./calc-history.component.css'],
})
export class CalcHistoryComponent implements OnInit {
  calculatorHistory: string[] = [];

  constructor(private readonly calService: CalculatorService) {}

  /**
   * To get calculator history
   */
  ngOnInit(): void {
    this.calculatorHistory = this.calService.getCalcHistory();
  }
}
