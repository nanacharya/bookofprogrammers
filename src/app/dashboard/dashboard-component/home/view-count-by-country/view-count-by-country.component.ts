import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {ChartOptions, ChartType} from "chart.js";
import {Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet} from "ng2-charts";

@Component({
  selector: 'pb-view-count-by-country',
  templateUrl: './view-count-by-country.component.html',
  styleUrls: ['./view-count-by-country.component.scss']
})
export class ViewCountByCountryComponent implements OnInit {

  @Input() countryData: any;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {position: 'bottom', fullWidth: true,}
  };

  public labels: Label[] = [];
  public data: SingleDataSet = [];
  public type: ChartType = 'doughnut';
  public legend = true;
  public pieChartPlugin = [];
  public backGroundColor = [{backgroundColor: ["#e82351", "#434a54", "#3ebf9b", "#9d86dc", "#f3af37", "#DC22C9", "#A00FDC"]}];


  constructor() {

    monkeyPatchChartJsLegend();
    monkeyPatchChartJsTooltip();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.countryData) {
      var data = this.countryData;
      Object.keys(data).forEach(a => {
        this.labels.push(a);
        this.data.push(data[a]);
      });
    }
  }

}
