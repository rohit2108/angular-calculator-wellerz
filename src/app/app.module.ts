import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorService } from './calculator.service';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [AppComponent, CalculatorComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, RouterModule],
  providers: [CalculatorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
