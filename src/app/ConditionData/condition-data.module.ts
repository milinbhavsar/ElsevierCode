import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ConditionDataComponent } from "./condition-data.component";
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [ConditionDataComponent, OrderByPipe],
  imports: [HttpClientModule, BrowserModule],
  exports: [ConditionDataComponent]
})
export class ConditionDataModule {}