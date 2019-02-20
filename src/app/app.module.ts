import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DemographicDataModule } from 'src/app/DemographicDataComponent/demographic-data.module';
import { ConditionDataModule } from 'src/app/ConditionData/condition-data.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    DemographicDataModule,
    ConditionDataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
