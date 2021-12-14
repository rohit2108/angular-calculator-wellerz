import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor() {}

  private calculatorHistory: string[] = [];

  /**
   * Get method to get calculator history
   */
  getCalcHistory(): string[] {
    return this.calculatorHistory;
  }

  /**
   * Set method to set calculator history
   */
  setCalcHistory(history: string[]) {
    this.calculatorHistory = history;
  }
}
