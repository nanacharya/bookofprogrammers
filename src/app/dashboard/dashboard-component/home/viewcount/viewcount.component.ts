import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChartOptions, ChartType} from "chart.js";
import {Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet} from "ng2-charts";

@Component({
  selector: 'app-viewcount',
  templateUrl: './viewcount.component.html',
  styleUrls: ['./viewcount.component.scss']
})
export class ViewcountComponent implements OnInit, OnChanges {

  @Input() browserData: any;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {position: 'bottom', fullWidth: true,}

  };

  public labels: Label[] = [];
  public data: SingleDataSet = [];
  public type: ChartType = 'pie';
  public legend = true;
  public pieChartPlugin = [];
  public backGroundColor = [{backgroundColor: ["#e84351", "#434a54", "#3ebf9b", "#4d86dc", "#f3af37", "#DC37C9", "#A52FDC"]}];


  constructor() {

    monkeyPatchChartJsLegend();
    monkeyPatchChartJsTooltip();
  }

  ngOnInit() {


  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.browserData) {
      var data = this.browserData;
      Object.keys(data).forEach(a => {
        this.labels.push(a);
        this.data.push(data[a]);
      });
    }
  }
}
