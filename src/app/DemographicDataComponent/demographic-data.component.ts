import { Component } from "@angular/core";
import { GetDemographicDataService } from "../DataServices/getDemographicData";
@Component({
  selector: "demographic-data",
  templateUrl: "./demographic-data.component.html"
})
 
export class DemographicDataComponent {
  demographycData: any;
  constructor(private GetDemographicData:GetDemographicDataService) {
      GetDemographicData.getData().subscribe( demographicData => { 
        this.demographycData = demographicData;
      });
  }
}
