import { Component } from "@angular/core";
import { GetPatientConditionService } from "../DataServices/getConditionData";
@Component({
  selector: "condition-data",
  templateUrl: "./condition-data.component.html"
})

export class ConditionDataComponent {
  conditionData: any;
  sortItem: any = {};
  isconditionAscending: boolean = false;
  isDateAscending: boolean = false;
  showSpinner: boolean = false;

  constructor(private GetPatientConditionData:GetPatientConditionService) {
    this.showSpinner = true;
    GetPatientConditionData.getData().subscribe( conditionData => {
      this.showSpinner = false;
      this.conditionData = conditionData.entry;
      console.log('conditionData----', this.conditionData);
    });
  }
  onSearch(conditionName) {
    var href = "https://www.ncbi.nlm.nih.gov/pubmed/?term=" + conditionName;
    window.open(href).focus();
  }

  sortData(name, order){
    console.log('------', name, order);
    this.sortItem = {name: name, isAscending: order}
  }
}
