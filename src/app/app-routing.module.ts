import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  {
    path: 'home',
    component: CalculatorComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'history',
    loadChildren: () =>
      import('./history/history.module').then((m) => m.HistoryModule),
  },
  { path: '**', component: CalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
