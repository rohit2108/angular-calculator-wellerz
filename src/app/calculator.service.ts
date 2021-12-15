import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor() {}

  private calculatorHistory: string[] = [];

  /**
   * Get method to get calculator history
   * @returns array of string
   */
  getCalcHistory(): string[] {
    return this.calculatorHistory;
  }

  /**
   * Set method to set calculator history
   * @param history array of string
   */
  setCalcHistory(history: string[]) {
    this.calculatorHistory = history;
  }
}
