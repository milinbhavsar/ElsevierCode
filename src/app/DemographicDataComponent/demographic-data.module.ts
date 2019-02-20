import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { DemographicDataComponent } from "./demographic-data.component";

@NgModule({
  declarations: [DemographicDataComponent],
  imports: [HttpClientModule, BrowserModule],
  exports: [DemographicDataComponent]
})
export class DemographicDataModule {}
