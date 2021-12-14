import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcHistoryComponent } from './calc-history/calc-history.component';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from '../calculator/calculator.component';

const routes: Routes = [
  {
    path: '',
    component: CalcHistoryComponent,
  },
];
@NgModule({
  declarations: [CalcHistoryComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HistoryModule {}
